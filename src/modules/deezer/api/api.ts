import { curry, isNil, negate } from 'lodash-es'

import {
  Track,
  Album,
  DataArray,
  Radio,
  Genre,
  Artist,
  ApiResponse,
  Chart,
  User,
  Playlist,
  SearchResults,
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

  fetchTopStations = () => {
    return this._request<DataArray<Radio>>(this._buildUrl('top'))
  }

  fetchStations = () => {
    return this._request<DataArray<Radio>>(this._buildUrl())
  }

  fetchTracks = (id: number) => {
    return this._request<DataArray<Track>>(this._buildUrl(`${id}/tracks`))
  }
}

class GenreEntity extends ApiEntity {
  protected _apiPath = 'genre'

  fetchById = (id: number) => {
    return this._request<Genre>(this._buildUrl(id))
  }

  fetchGenres = () => {
    return this._request<DataArray<Genre>>(this._buildUrl())
  }
}

class SearchEntity extends ApiEntity {
  protected _apiPath = 'search'

  searchEverything = (query: string) => {
    return this._request<SearchResults>(this._buildUrl(`?q=${query}`))
  }

  searchTracks = (query: string) => {
    return this._request<DataArray<Track>>(this._buildUrl(`track?q=${query}`))
  }

  searchAlbums = (query: string) => {
    return this._request<DataArray<Album>>(this._buildUrl(`album?q=${query}`))
  }

  searchArtists = (query: string) => {
    return this._request<DataArray<Artist>>(this._buildUrl(`artist?q=${query}`))
  }
}

class ArtistEntity extends ApiEntity {
  protected _apiPath = 'artist'

  fetchById = (id: number) => {
    return this._request<Artist>(this._buildUrl(id))
  }

  fetchAlbums = (id: number) => {
    return this._request<DataArray<Album>>(this._buildUrl(`${id}/albums`))
  }

  fetchRelatedArtists = (id: number) => {
    return this._request<DataArray<Artist>>(this._buildUrl(`${id}/related`))
  }

  fetchTopTracks = (id: number) => {
    return this._request<DataArray<Track>>(this._buildUrl(`${id}/top`))
  }

  fetchAllTracks = async (id: number) => {
    const data = (await this.fetchTopTracks(id)).body
    const total = data?.total || 10

    return this._request<DataArray<Track>>(
      this._buildUrl(`${id}/top?limit=${total}`)
    )
  }
}

class ChartEntity extends ApiEntity {
  protected _apiPath = 'chart'

  fetchById = (genreId: number) => {
    return this._request<Chart>(this._buildUrl(genreId))
  }

  fetchCharts = () => {
    return this._request<Chart>(this._buildUrl())
  }
}

class UserEntity extends ApiEntity {
  protected _apiPath = 'user/me'

  fetchMe = () => {
    return this._request<User>(this._buildUrl())
  }

  fetchTracks = () => {
    return this._request<Playlist['tracks']>(this._buildUrl('tracks'))
  }

  addToFavorites = (trackId: number) => {
    return this._request<unknown>(this._buildUrl('tracks'), 'POST', {
      track_id: trackId,
    })
  }

  removeFromFavorites = (trackId: number) => {
    return this._request<unknown>(this._buildUrl('tracks'), 'DELETE', {
      track_id: trackId,
    })
  }

  isFavoriteTrack = async (trackId: number) => {
    const { body } = await this.fetchTracks()

    if (!body) {
      return false
    }

    return !!body.data.find(({ id }) => id === trackId)
  }
}

class EditorialEntity extends ApiEntity {
  protected _apiPath = 'editorial'

  fetchEditorials = () => {
    return this._request<DataArray<Genre>>(this._buildUrl())
  }

  fetchReleases = (editorialId?: number) => {
    return this._request<DataArray<Album>>(
      this._buildUrl(`${editorialId || 0}/releases`)
    )
  }
}

export const api = {
  track: new TrackEntity(),
  album: new AlbumEntity(),
  radio: new RadioEntity(),
  genre: new GenreEntity(),
  search: new SearchEntity(),
  artist: new ArtistEntity(),
  chart: new ChartEntity(),
  user: new UserEntity(),
  editorial: new EditorialEntity(),
}
