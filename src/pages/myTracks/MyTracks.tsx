import React, { useState, useEffect, useCallback } from 'react'
import { Box } from '@chakra-ui/core'
import { throttle } from 'lodash-es'

import { Playlist } from '../../modules/deezer/api/types'
import { api } from '../../modules/deezer/api'
import { Track } from '../../components/track'
import { startWith } from '../../utils/helpers'

export const MyTracks: React.FC<{}> = () => {
  const [tracks, setTracks] = useState<Playlist['tracks']['data']>([])

  const throttledUpdate = useCallback(
    throttle(async () => {
      const tracks = (await api.user.fetchTracks()).body?.data

      tracks && setTracks(tracks)
    }, 2000),
    []
  )

  useEffect(() => {
    throttledUpdate()
  })

  return (
    <Box mx={3}>
      {tracks.map(({ title, duration, artist, id }) => (
        <Track
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
      ))}
    </Box>
  )
}
