type ApiError = {
  code: number
  message: string
  type: string
}

export type ApiResponse<T> = {
  error?: ApiError
  body?: T
}

export type Artist = {
  /**
   * The artist's Deezer id
   */
  id: number
  /**
   * The artist's name
   */
  name: string
  /**
   * The url of the artist picture. Add 'size' parameter to the url to change size. Can be 'small', 'medium', 'big', 'xl'
   */
  picture: string
  /**
   * The url of the artist picture in size small.
   */
  picture_small: string
  /**
   * The url of the artist picture in size medium.
   */
  picture_medium: string
  /**
   * The url of the artist picture in size big.
   */
  picture_big: string
  /**
   * The url of the artist picture in size xl.
   */
  picture_xl: string
}

type ArtistPreview = Pick<Artist, 'id' | 'name'>

export type Track = {
  /**
   * The track's Deezer id
   */
  id: number
  /**
   * 	The track's fulltitle
   */
  title: string
  /**
   * 	The track's duration in seconds
   */
  duration: number
  /**
   * 	The track's release string
   */
  release_date: string
  /**
   * 	artist object
   */
  artist: Artist
  /**
   * 	album object
   */
  album: AlbumPreview
}

type TrackPreview = Pick<Track, 'id' | 'title' | 'duration'>

export type Album = {
  /**
   *	The Deezer album id
   */
  id: number
  /**
   *	The album title
   */
  title: string
  /**
   *	The url of the album's cover. Add 'size' parameter to the url to change size. Can be 'small', 'medium', 'big', 'xl'
   */
  cover: string
  /**
   *	The url of the album's cover in size small.
   */
  cover_small: string
  /**
   *	The url of the album's cover in size medium.
   */
  cover_medium: string
  /**
   *	The url of the album's cover in size big.
   */
  cover_big: string
  /**
   *	The url of the album's cover in size xl.
   */
  cover_xl: string
  /**
   *	The album's first genre id (You should use the genre list instead). NB : -1 for not found
   */
  genre_id: number
  /**
   *	List of genre object
   */
  genres: {
    data: Array<GenrePreview>
  }
  /**
   *	The album's label name
   */
  label: string
  /**
   *	The album's duration (seconds)
   */
  duration: number
  /**
   *	The album's release date
   */
  release_date: string
  /**
   *	artist object containing : id, name, picture, picture_small, picture_medium, picture_big, picture_xl
   */
  artist: Artist
  /**
   * list of tracks
   */
  tracks: {
    data: Array<TrackPreview & { artist: ArtistPreview }>
  }
}

type AlbumPreview = Pick<
  Album,
  | 'id'
  | 'title'
  | 'cover'
  | 'cover_small'
  | 'cover_medium'
  | 'cover_big'
  | 'cover_xl'
>

export type Playlist = {
  /**
   * The playlist's Deezer id
   *  */
  id: number
  /**
   *The playlist's title
   */
  title: string
  /**
   *The playlist description
   */
  description: string
  /**
   *The playlist's duration (seconds)
   */
  duration: number
  /**
   *If the playlist is public or not
   */
  public: boolean
  /**
   *If the playlist is the love tracks playlist
   */
  is_loved_track: boolean
  /**
   *The url of the playlist's cover. Add 'size' parameter to the url to change size. Can be 'small', 'medium', 'big', 'xl'
   */
  picture: string
  /**
   *The url of the playlist's cover in size small.
   */
  picture_small: string
  /**
   *The url of the playlist's cover in size medium.
   */
  picture_medium: string
  /**
   *The url of the playlist's cover in size big.
   */
  picture_big: string
  /**
   *The url of the playlist's cover in size xl.
   */
  picture_xl: string
  /**
   *list of track
   */
  tracks: {
    data: Array<
      TrackPreview & {
        time_add: number
        artist: ArtistPreview
        album: AlbumPreview
      }
    >
  }
}

type ChartEntity = {
  tracks: Track
  albums: Album
  artists: Artist
  playlists: Playlist
}

export type Chart = {
  [K in keyof ChartEntity]: DataArray<ChartEntity[K] & { position: number }>
}

export type Radio = {
  /**
   * The radio deezer ID
   */
  id: number
  /**
   * The radio title
   */
  title: string
  /**
   * The radio title
   */
  description: string
  /**
   * The url of the artist picture. Add 'size' parameter to the url to change size. Can be 'small', 'medium', 'big', 'xl'
   */
  picture: string
  /**
   * The url of the artist picture in size small.
   */
  picture_small: string
  /**
   * The url of the artist picture in size medium.
   */
  picture_medium: string
  /**
   * The url of the artist picture in size big.
   */
  picture_big: string
  /**
   * The url of the artist picture in size xl.
   */
  picture_xl: string
}

export type Genre = {
  /**
   * The editorial's Deezer id
   */
  id: number
  /**
   * The editorial's name
   */
  name: string
  /**
   * The url of the genre picture. Add 'size' parameter to the url to change size. Can be 'small', 'medium', 'big', 'xl'
   */
  picture: string
  /**
   * The url of the genre picture in size small.
   */
  picture_small: string
  /**
   * The url of the genre picture in size medium.
   */
  picture_medium: string
  /**
   * The url of the genre picture in size big.
   */
  picture_big: string
  /**
   * The url of the genre picture in size xl.
   */
  picture_xl: string
}

type GenrePreview = Pick<Genre, 'id' | 'name' | 'picture'>

export type DataArray<T> = {
  data: Array<T & { type: string }>
  total: number
}

export type User = {
  /**
   * The user's Deezer ID
   */

  id: number
  /**
   *     The user's Deezer nickname
   */
  name: string
  /**
   * 	The user's last name
   */
  lastname: string
  /**
   * 	The user's first name
   */
  firstname: string
  /**
   * 	The url of the user's profil picture. Add 'size' parameter to the url to change size. Can be 'small', 'medium', 'big', 'xl'
   */
  picture: string
  /**
   * 	The url of the user's profil picture in size small.
   */
  picture_small: string
  /**
   * 	The url of the user's profil picture in size medium.
   */
  picture_medium: string
  /**
   * 	The url of the user's profil picture in size big.
   */
  picture_big: string
  /**
   * 	The url of the user's profil picture in size xl.
   */
  picture_xl: string
  // /**
  //  * 	The user's country
  //  */
  // lang: string
}
