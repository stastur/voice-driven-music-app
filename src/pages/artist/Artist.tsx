import React, { useEffect, useState } from 'react'
import {
  Box,
  Heading,
  PseudoBox,
  Text,
  Image,
  Flex,
  Spinner,
} from '@chakra-ui/core'
import { take } from 'lodash-es'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'

import { api } from '../../modules/deezer/api'
import {
  Artist as ArtistType,
  Album,
  Track as TrackType,
} from '../../modules/deezer/api/types'
import { SlidingBox } from '../../components/slidingBox'
import { Card } from '../../components/card'
import { Track } from '../../components/track'
import { startWith } from '../../utils/helpers'

export const Artist: React.FC<{}> = () => {
  const [artist, setArtist] = useState<ArtistType>()
  const [relatedArtists, setRelatedArtists] = useState<Array<ArtistType>>([])
  const [albums, setAlbums] = useState<Array<Album>>([])
  const [topTracks, setTopTracks] = useState<Array<TrackType>>([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const asyncEffect = async () => {
      setIsLoading(true)

      const artist = (await api.artist.fetchById(id)).body
      const albums = (await api.artist.fetchAlbums(id)).body
      const relatedArtists = (await api.artist.fetchRelatedArtists(id)).body
      const topTracks = (await api.artist.fetchTopTracks(id)).body

      relatedArtists && setRelatedArtists(relatedArtists.data)
      albums && setAlbums(albums.data)
      artist && setArtist(artist)
      setTopTracks(topTracks?.data || [])

      setIsLoading(false)
    }

    asyncEffect()
  }, [id])

  if (isLoading) {
    return (
      <Flex justify="center" w="100%">
        <Spinner size="xl" />
      </Flex>
    )
  }

  return (
    <Box>
      <Flex mx={3}>
        <Image size=["8rem", "2xs"] alt={artist?.name} src={artist?.picture_big} />
        <Box ml={3}>
          <Text textTransform="uppercase">Artist</Text>
          <Heading>{artist?.name}</Heading>
          <Box>
            <Text as="span" fontWeight="semibold" pr={1}>
              Related artists:
            </Text>
            {take(relatedArtists, 3).map(({ id, name }, index, arr) => (
              <React.Fragment key={id}>
                <PseudoBox as="span" _hover={{ textDecoration: 'underline' }}>
                  <Link to={`/artist/${id}`}>{name}</Link>
                </PseudoBox>
                {index !== arr.length - 1 && <Text as="span">, </Text>}
              </React.Fragment>
            ))}
          </Box>
        </Box>
      </Flex>

      <Box m={3}>
        <Heading mb={3}>Top tracks</Heading>
        {topTracks.map(({ id, title, artist, duration }) => (
          <Track
            key={id}
            title={title}
            artist={artist.name}
            duration={duration}
            onPlay={() =>
              DZ.player.playTracks(
                startWith(
                  topTracks.map(({ id }) => id),
                  id
                ).map(String)
              )
            }
          />
        ))}
      </Box>

      <SlidingBox label="Albums">
        {albums?.map(({ id, title, cover_medium }) => (
          <Card
            m={3}
            key={id}
            title={title}
            src={cover_medium}
            onPlay={() => DZ.player.playAlbum(id)}
          />
        ))}
      </SlidingBox>

      <SlidingBox label="Related artists">
        {relatedArtists?.map(({ id, name, picture_medium }) => (
          <Link key={id} to={`/artist/${id}`}>
            <Card m={3} title={name} src={picture_medium} />
          </Link>
        ))}
      </SlidingBox>
    </Box>
  )
}
