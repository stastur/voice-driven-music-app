import React, { useEffect, useState } from 'react'
import { Box, Heading, Flex, Spinner } from '@chakra-ui/core'
import { useLocation } from 'react-router'
import { FaSearch } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import {
  Track as TrackType,
  Artist,
  Album,
} from '../../modules/deezer/api/types'
import { api } from '../../modules/deezer/api'
import { Track } from '../../components/track'
import { startWith } from '../../utils/helpers'
import { SlidingBox } from '../../components/slidingBox'
import { Card } from '../../components/card'

export const SearchResults: React.FC<{}> = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [tracks, setTracks] = useState<Array<TrackType>>([])
  const [artists, setArtists] = useState<Array<Artist>>([])
  const [albums, setAlbums] = useState<Array<Album>>([])
  const { search } = useLocation()

  const query = new URLSearchParams(search).get('q') || ''

  useEffect(() => {
    const asyncEffect = async () => {
      setIsLoading(true)

      const tracks = (await api.search.searchTracks(query)).body
      const artists = (await api.search.searchArtists(query)).body
      const albums = (await api.search.searchAlbums(query)).body

      tracks && setTracks(tracks.data)
      artists && setArtists(artists.data)
      albums && setAlbums(albums.data)

      setIsLoading(false)
    }

    asyncEffect()
  }, [query])

  if (isLoading) {
    return (
      <Flex justify="center" w="100%">
        <Spinner size="xl" />
      </Flex>
    )
  }

  return (
    <Box mx="3">
      <Flex pl={3} align="center">
        <Box as={FaSearch} size={8} />
        <Heading pl={3}>{query}</Heading>
      </Flex>

      {!!tracks.length && (
        <Box m={3}>
          <Heading mb={3}>Tracks</Heading>
          {tracks.map(({ id, title, artist, duration }) => (
            <Track
              key={id}
              title={title}
              artist={artist.name}
              duration={duration}
              onPlay={() =>
                DZ.player.playTracks(
                  startWith(
                    tracks.map(({ id }) => id),
                    id
                  ).map(String)
                )
              }
            />
          ))}
        </Box>
      )}

      {!!artists.length && (
        <SlidingBox label="Artists">
          {artists.map(({ id, name, picture_medium }) => (
            <Link key={id} to={`/artist/${id}`}>
              <Card m={3} title={name} src={picture_medium} />
            </Link>
          ))}
        </SlidingBox>
      )}

      {!!albums.length && (
        <SlidingBox label="Albums">
          {albums.map(({ id, title, cover_medium }) => (
            <Card
              m={3}
              key={id}
              title={title}
              src={cover_medium}
              onPlay={() => DZ.player.playAlbum(id)}
            />
          ))}
        </SlidingBox>
      )}
    </Box>
  )
}
