import React from 'react'
import { ThemeProvider, Box, CSSReset } from '@chakra-ui/core'

import { Player } from './modules/deezer/player'

export function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box>
        <Box />
        <Box px="2">
          <Player />
        </Box>
      </Box>
    </ThemeProvider>
  )
}
