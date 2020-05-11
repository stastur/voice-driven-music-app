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

abstract class ApiEntity {
  protected abstract _apiPath: string

  protected _request = <T>(
    path: string,
    method?: DeezerSdk.HttpMethod,
    data?: any
  ) => {
    return new Promise<ApiResponse<T>>(resolve => {
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
  protected _apiPath = 'track'

  fetchById = (id: number) => {
    return this._request<Track>(this._buildUrl(id))
  }
}

class AlbumEntity extends ApiEntity {
  protected _apiPath = 'album'

  fetchById = (id: number) => {
    return this._request<Album>(this._buildUrl(id))
  }

  fetchTracks = (id: number) => {
    return this._request<Pick<Album, 'tracks'>>(this._buildUrl(`${id}/tracks`))
  }
}

class RadioEntity extends ApiEntity {
  protected _apiPath = 'radio'

  fetchById = (id: number) => {
    return this._request<Radio>(this._buildUrl(id))
  }

  fetchStations = () => {
    return this._request<Search<Radio>>(this._buildUrl())
  }

  fetchTracks = (id: number) => {
    return this._request<Search<Track>>(this._buildUrl(`${id}/tracks`))
  }
}

class GenreEntity extends ApiEntity {
  protected _apiPath = 'genre'

  fetchById = (id: number) => {
    return this._request<Radio>(this._buildUrl(id))
  }

  fetchGenres = () => {
    return this._request<Search<Genre>>(this._buildUrl())
  }
}

class SearchEntity extends ApiEntity {
  protected _apiPath = 'search'

  searchEverything = (query: string) => {
    return this._request<Search<Track | Artist | Album>>(
      this._buildUrl(`track?q=${query}`)
    )
  }

  searchTracks = (query: string) => {
    return this._request<Search<Track>>(this._buildUrl(`track?q=${query}`))
  }
}

class ArtistEntity extends ApiEntity {
  protected _apiPath = 'artist'

  fetchById = (id: number) => {
    return this._request<Artist>(this._buildUrl(id))
  }

  fetchAlbums = (id: number) => {
    return this._request<Search<Album>>(this._buildUrl(`${id}/albums`))
  }

  fetchRelatedArtists = (id: number) => {
    return this._request<Search<Artist>>(this._buildUrl(`${id}/related`))
  }
}

export const api = {
  track: new TrackEntity(),
  album: new AlbumEntity(),
  radio: new RadioEntity(),
  genre: new GenreEntity(),
  search: new SearchEntity(),
  artist: new ArtistEntity(),
}
