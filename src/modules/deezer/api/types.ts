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
   * The url of the artist on Deezer
   */
  link: string
  /**
   * The share link of the artist on Deezer
   */
  share: string
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
  /**
   * The number of artist's albums
   */
  nb_album: number
  /**
   * The number of artist's fans
   */
  nb_fan: number
  /**
   * true if the artist has a smartradio
   */
  radio: boolean
  /**
   * API Link to the top of this artist
   */
  tracklist: string
}

export type Track = {
  /**
   * The track's Deezer id
   */
  id: number
  /**
   * 	true if the track is readable in the player for the current user
   */
  readable: boolean
  /**
   * 	The track's fulltitle
   */
  title: string
  /**
   * 	The track's short title
   */
  title_short: string
  /**
   * 	The track version
   */
  title_version: string
  /**
   * 	The track unseen status
   */
  unseen: boolean
  /**
   * 	The track isrc
   */
  isrc: string
  /**
   * 	The string of the track on Deezer
   */
  link: string
  /**
   * 	The share link of the track on Deezer
   */
  share: string
  /**
   * 	The track's duration in seconds
   */
  duration: number
  /**
   * 	The position of the track in its album
   */
  track_position: number
  /**
   * 	The track's album's disk number
   */
  disk_number: number
  /**
   * 	The track's Deezer rank
   */
  rank: number
  /**
   * 	The track's release string
   */
  release_date: string
  /**
   * 	Whether the track contains explicit lyrics
   */
  explicit_lyrics: boolean
  /**
   * 	The explicit content lyrics values (0:Not Explicit; 1:Explicit; 2:Unknown; 3:Edited; 6:No Advice Available)
   */
  explicit_content_lyrics: number
  /**
   * 	The explicit cover value (0:Not Explicit; 1:Explicit; 2:Unknown; 3:Edited; 6:No Advice Available)
   */
  explicit_content_cover: number
  /**
   * 	The string of track's preview file. This file contains the first 30 seconds of the track
   */
  preview: string
  /**
   * 	Beats per minute
   */
  bpm: number
  /**
   * 	Signal strength
   */
  gain: number
  /**
   * 	Return an alternative readable track if the current track is not readable
   */
  alternative: Track
  /**
   * 	artist object containing : id, name, link, share, picture, picture_small, picture_medium, picture_big, picture_xl, nb_album, nb_fan, radio, tracklist, role
   */
  artist: Artist
  /**
   * 	album object containing : id, title, link, cover, cover_small, cover_medium, cover_big, cover_xl, release_date
   */
  album: Pick<
    Album,
    | 'id'
    | 'title'
    | 'cover'
    | 'cover_small'
    | 'cover_medium'
    | 'cover_big'
    | 'cover_xl'
    | 'release_date'
  >
}

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
   *	The album UPC
   */
  upc: string
  /**
   *	The url of the album on Deezer
   */
  link: string
  /**
   *	The share link of the album on Deezer
   */
  share: string
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
  genres: Array<Genre>
  /**
   *	The album's label name
   */
  label: string
  /**
   * */

  nb_tracks: number
  /**
   *	The album's duration (seconds)
   */
  duration: number
  /**
   *	The number of album's Fans
   */
  fans: number
  /**
   *	The album's rate
   */
  rating: number
  /**
   *	The album's release date
   */
  release_date: string
  /**
   *	The record type of the album (EP / ALBUM / etc..)
   */
  record_type: string
  /**
   * */

  available: boolean
  /**
   *	Return an alternative album object if the current album is not available
   */
  alternative: Album
  /**
   *	API Link to the tracklist of this album
   */
  tracklist: string
  /**
   *	Whether the album contains explicit lyrics
   */
  explicit_lyrics: boolean
  /**
   *	The explicit content lyrics values:
   * - 0: Not Explicit;
   * - 1: Explicit;
   * - 2: Unknown;
   * - 3: Edited;
   * - 4: Partially Explicit (Album "lyrics" only);
   * - 5: Partially Unknown (Album "lyrics" only);
   * - 6: No Advice Available;
   * - 7: Partially No Advice Available (Album "lyrics" only))
   */
  explicit_content_lyrics: number
  /**
   *	The explicit cover values:
   * - 0: Not Explicit;
   * - 1: Explicit;
   * - 2: Unknown;
   * - 3: Edited;
   * - 4: Partially Explicit (Album "lyrics" only);
   * - 5: Partially Unknown (Album "lyrics" only);
   * - 6: No Advice Available;
   * - 7: Partially No Advice Available (Album "lyrics" only))
   */
  explicit_content_cover: number
  /**
   *	artist object containing : id, name, picture, picture_small, picture_medium, picture_big, picture_xl
   */
  artist: Artist
  /**
   * list of tracks
   */
  tracks: Array<
    Pick<
      Track,
      | 'id'
      | 'readable'
      | 'title'
      | 'title_short'
      | 'title_version'
      | 'link'
      | 'duration'
      | 'rank'
      | 'explicit_lyrics'
      | 'preview'
    > & { artist: Pick<Artist, 'id' | 'name' | 'tracklist'> }
  >
}

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
   *If the playlist is collaborative or not
   */
  collaborative: boolean
  /**
   *The playlist's rate
   */
  rating: number
  /**
   *Nb tracks in the playlist
   */
  nb_tracks: number
  /**
   *Nb tracks not seen
   */
  unseen_track_count: number
  /**
   *The number of playlist's fans
   */
  fans: number
  /**
   *The url of the playlist on Deezer
   */
  link: string
  /**
   *The share link of the playlist on Deezer
   */
  share: string
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
   *The checksum for the track list
   */
  checksum: string
  /**
   *list of track
   */
  tracks: Array<
    Pick<
      Track,
      | 'id'
      | 'readable'
      | 'title'
      | 'title_short'
      | 'title_version'
      | 'unseen'
      | 'link'
      | 'duration'
      | 'rank'
      | 'explicit_lyrics'
      | 'preview'
      | 'artist'
      | 'album'
    > & {
      time_add: string
      artist: Pick<Artist, 'id' | 'name' | 'link'>
      album: Pick<
        Album,
        | 'id'
        | 'title'
        | 'cover'
        | 'cover_small'
        | 'cover_medium'
        | 'cover_big'
        | 'cover_xl'
      >
    }
  >
}

//TODO: Typings
export type Chart = {}

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
   * The share link of the radio on Deezer
   */
  share: string
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
  /**
   * API Link to the tracklist of this radio
   */
  tracklist: string
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

export type Search<T> = {
  data: Array<T>
}
