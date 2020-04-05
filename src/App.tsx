import React from 'react'
import { ThemeProvider, Box, CSSReset } from '@chakra-ui/core'

import { Player } from './modules/deezer'

export function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <Box>
        <Player px="2" />
      </Box>
    </ThemeProvider>
  )
}
