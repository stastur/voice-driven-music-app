import React, { useState, useEffect } from 'react'
import { Box } from '@chakra-ui/core'

import { Album } from '../../modules/deezer/api/types'
import { api } from '../../modules/deezer/api'
import { Card } from '../../components/card'
import { SlidingBox } from '../../components/slidingBox'

export const Homepage: React.FC<{}> = () => {
  const [albums, setAlbums] = useState<Array<Album>>([])

  useEffect(() => {
    api.artist.fetchAlbums(8506054).then(r => setAlbums(r.body?.data || []))
  }, [])

  return (
    <Box mb="20" d="flex" flexWrap="wrap">
      <SlidingBox label="Ghost">
        {albums.map(({ id, cover_medium, title }) => (
          <Card
            key={id}
            title={title}
            src={cover_medium}
            onPlay={() => DZ.player.playAlbum(id)}
            m="3"
          />
        ))}
      </SlidingBox>
    </Box>
  )
}
