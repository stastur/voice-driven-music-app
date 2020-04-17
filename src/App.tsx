import React, { useEffect, useState } from 'react'
import { ThemeProvider, Box, CSSReset } from '@chakra-ui/core'

import { Player, api } from './modules/deezer'
import { Album } from './modules/deezer/api/types'
import { Card } from './components/card'

export function App() {
  const [albums, setAlbums] = useState<Array<Album>>([])

  useEffect(() => {
    api.artist.fetchAlbums(8506054).then(r => setAlbums(r.body?.data || []))
  }, [])

  return (
    <ThemeProvider>
      <CSSReset />
      <Box mb="20" d="flex" flexWrap="wrap">
        {albums.map(({ id, cover_medium, title }) => (
          <Card
            key={id}
            title={title}
            src={cover_medium}
            onPlay={() => DZ.player.playAlbum(id)}
            m="3"
          />
        ))}
      </Box>
      <Player position="fixed" bottom="0" left="0" right="0" p="2" bg="white" />
    </ThemeProvider>
  )
}
