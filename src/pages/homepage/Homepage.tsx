import React, { useState, useEffect } from 'react'
import { Box, SimpleGrid, Flex, Heading, Spinner } from '@chakra-ui/core'

import { Link } from 'react-router-dom'

import { Track, Radio, Album, Genre } from '../../modules/deezer/api/types'
import { api } from '../../modules/deezer/api'
import { Card } from '../../components/card'
import { SlidingBox } from '../../components/slidingBox'
import { Track as TrackComponent } from '../../components/track'

export const Homepage: React.FC<{}> = () => {
  const [releases, setReleases] = useState<Array<Album>>([])
  const [stations, setStations] = useState<Array<Radio>>([])
  const [tracks, setTracks] = useState<Array<Track>>([])
  const [editorials, setEditorials] = useState<Array<Genre>>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const asyncEffect = async () => {
      setIsLoading(true)

      const chart = (await api.chart.fetchCharts()).body
      const stations = (await api.radio.fetchTopStations()).body
      const releases = (await api.editorial.fetchReleases()).body
      const editorials = (await api.editorial.fetchEditorials()).body

      setEditorials(editorials?.data || [])
      setStations(stations?.data || [])
      setReleases(releases?.data || [])
      setTracks(chart?.tracks.data || [])

      setIsLoading(false)
    }

    asyncEffect()
  }, [])

  if (isLoading) {
    return (
      <Flex justify="center" w="100%">
        <Spinner size="xl" />
      </Flex>
    )
  }

  return (
    <Box d="flex" flexWrap="wrap">
      <SlidingBox mb={3} label="Top stations">
        {stations.map(({ id, picture_medium, title }) => (
          <Card
            key={id}
            title={title}
            src={picture_medium}
            onPlay={() => DZ.player.playRadio(id)}
            m="3"
          />
        ))}
      </SlidingBox>

      <SlidingBox label="Latest releases">
        {releases.map(({ id, artist, title, cover_medium }) => (
          <Card
            key={id}
            title={title}
            description={artist.name}
            src={cover_medium}
            onPlay={() => DZ.player.playAlbum(id)}
            m="3"
          />
        ))}
      </SlidingBox>

      <SimpleGrid width="100%" columns={[1, 2]} spacing={8} px={3}>
        {tracks.map(({ title, artist, duration, id }) => (
          <TrackComponent
            key={id}
            onPlay={() => DZ.player.playTracks([`${id}`])}
            title={title}
            duration={duration}
            artist={artist.name}
          />
        ))}
      </SimpleGrid>

      <Box>
        <Heading p={3}>Music by genre</Heading>
        <Flex
          justify={{ xs: 'center', md: 'space-between' }}
          flexWrap="wrap"
          width="100%"
          px={3}
        >
          {editorials
            .filter(({ id }) => id !== 0)
            .map(({ name, id, picture_medium }) => (
              <Link key={id} to={`/genre/${id}`}>
                <Card mb={3} title={name} src={picture_medium} />
              </Link>
            ))}
        </Flex>
      </Box>
    </Box>
  )
}
