import { curry, isNil, negate } from 'lodash'

import {
  Track,
  Album,
  Search,
  Radio,
  Genre,
  Artist,
  ApiResponse,
} from './types'

class ApiEntity {
  protected _apiPath: string

  constructor(apiPath: string) {
    this._apiPath = apiPath
  }

  protected _callToAPI = <TResponse>(
    path: string,
    method?: DeezerSdk.HttpMethod,
    data?: any
  ) => {
    return new Promise<ApiResponse<TResponse>>(resolve => {
      const resolver = (res: any) => {
        const response = res.error ? { error: res.error } : { body: res }
        resolve(response)
      }

      const params = [path, method, data, resolver].filter(negate(isNil))
      const curriedFn = curry(DZ.api, params.length)

      try {
        params.reduce((fn, arg) => fn(arg), curriedFn)
      } catch (e) {
        resolve({ error: e })
      }
    })
  }

  protected _buildUrl = (path?: string | number) =>
    path ? `${this._apiPath}/${path}` : this._apiPath
}

class TrackEntity extends ApiEntity {
  fetchById = (id: number) => {
    return this._callToAPI<Track>(this._buildUrl(id))
  }
}

class AlbumEntity extends ApiEntity {
  fetchById = (id: number) => {
    return this._callToAPI<Album>(this._buildUrl(id))
  }

  fetchTracks = (id: number) => {
    return this._callToAPI<Pick<Album, 'tracks'>>(
      this._buildUrl(`${id}/tracks`)
    )
  }
}

class RadioEntity extends ApiEntity {
  fetchById = (id: number) => {
    return this._callToAPI<Radio>(this._buildUrl(id))
  }

  fetchStations = () => {
    return this._callToAPI<Search<Radio>>(this._buildUrl())
  }

  fetchTracks = (id: number) => {
    return this._callToAPI<Search<Track>>(this._buildUrl(`${id}/tracks`))
  }
}

class GenreEntity extends ApiEntity {
  fetchById = (id: number) => {
    return this._callToAPI<Radio>(this._buildUrl(id))
  }

  fetchGenres = () => {
    return this._callToAPI<Search<Genre>>(this._buildUrl())
  }
}

class SearchEntity extends ApiEntity {
  searchEverything = (query: string) => {
    return this._callToAPI<Search<Track | Artist | Album>>(
      this._buildUrl(`track?q=${query}`)
    )
  }

  searchTracks = (query: string) => {
    return this._callToAPI<Search<Track>>(this._buildUrl(`track?q=${query}`))
  }
}

class ArtistEntity extends ApiEntity {
  fetchById = (id: number) => {
    return this._callToAPI<Artist>(this._buildUrl(id))
  }

  fetchAlbums = (id: number) => {
    return this._callToAPI<Search<Album>>(this._buildUrl(`${id}/albums`))
  }

  fetchRelatedArtists = (id: number) => {
    return this._callToAPI<Search<Artist>>(this._buildUrl(`${id}/related`))
  }
}

export const api = {
  track: new TrackEntity('track'),
  album: new AlbumEntity('album'),
  radio: new RadioEntity('radio'),
  genre: new GenreEntity('genre'),
  search: new SearchEntity('search'),
  artist: new ArtistEntity('artist'),
}
