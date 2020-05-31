import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Box, Heading, SimpleGrid, Flex, Spinner } from '@chakra-ui/core'
import { FaMusic } from 'react-icons/fa'

import { api } from '../../modules/deezer/api'
import { Chart, Genre as GenreType } from '../../modules/deezer/api/types'
import { SlidingBox } from '../../components/slidingBox'
import { Card } from '../../components/card'
import { Track } from '../../components/track'
import { startWith } from '../../utils/helpers'

export const Genre: React.FC<{}> = () => {
  const [chart, setChart] = useState<Chart>()
  const [genre, setGenre] = useState<GenreType>()
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const asyncEffect = async () => {
      setIsLoading(true)

      const chart = (await api.chart.fetchById(id)).body
      const genre = (await api.genre.fetchById(id)).body

      genre && setGenre(genre)
      chart && setChart(chart)

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
      {genre?.name && (
        <Flex pl={3} align="center">
          <Box as={FaMusic} size={8} />
          <Heading pl={3}>{genre.name}</Heading>
        </Flex>
      )}

      <SlidingBox label="Artists">
        {chart?.artists.data.map(({ id, name, picture_medium }) => (
          <Link key={id} to={`/artist/${id}`}>
            <Card m={3} src={picture_medium} title={name} />
          </Link>
        ))}
      </SlidingBox>

      <SlidingBox label="Albums">
        {chart?.albums.data.map(({ id, title, cover_medium, artist }) => (
          <Card
            m={3}
            key={id}
            src={cover_medium}
            title={title}
            description={artist.name}
            onPlay={() => DZ.player.playAlbum(id)}
          />
        ))}
      </SlidingBox>

      <SlidingBox label="Playlists">
        {chart?.playlists.data.map(({ id, title, picture_medium }) => (
          <Card
            m={3}
            key={id}
            src={picture_medium}
            title={title}
            onPlay={() => DZ.player.playPlaylist(id)}
          />
        ))}
      </SlidingBox>

      <Heading pl={3}>Popular tracks</Heading>
      <SimpleGrid columns={{ xs: 1, sm: 2 }} spacing={3} px={3}>
        {chart?.tracks.data.map(
          ({ id, title, duration, artist }, _, tracks) => (
            <Track
              key={id}
              title={title}
              duration={duration}
              artist={artist.name}
              onPlay={() =>
                DZ.player.playTracks(
                  startWith(
                    tracks.map(({ id }) => id),
                    id
                  ).map(String)
                )
              }
            />
          )
        )}
      </SimpleGrid>
    </Box>
  )
}
