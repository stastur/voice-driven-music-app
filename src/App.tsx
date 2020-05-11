import React, { useEffect } from 'react'
import { Box, CSSReset, useToast } from '@chakra-ui/core'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import { Recognition } from './modules/recognition'
import { Player } from './modules/deezer'
import { Header } from './components/header'
import { Homepage } from './pages/homepage'

export function App() {
  const toast = useToast()

  useEffect(() => {
    const recognition = new Recognition()
      .addCommand({ trigger: 'play', callback: DZ.player.play })
      .addCommand({ trigger: 'stop', callback: DZ.player.pause })
      .addCommand({ trigger: 'next', callback: DZ.player.next })
      .addCommand({ trigger: 'previous', callback: DZ.player.prev })
      .addCommand({
        trigger: 'volume up',
        callback: () => DZ.player.setVolume(DZ.player.getVolume() + 20),
      })
      .addCommand({
        trigger: 'volume down',
        callback: () => DZ.player.setVolume(DZ.player.getVolume() - 20),
      })

    recognition.addEventListener('result', event => {
      const speechEvent = event as SpeechRecognitionEvent

      const results = Array.from(
        speechEvent.results[speechEvent.resultIndex]
      ).map(r => r.transcript)

      toast({
        position: 'top-right',
        title: 'Recognized:',
        description: results.join(' | '),
      })
    })

    recognition.start()
  }, [toast])

  return (
    <BrowserRouter basename="/voice-driven-music-app">
      <CSSReset />
      <Box>
        <Header />
        <Box as="main">
          <Switch>
            <Route exact path="/">
              <Homepage />
            </Route>
          </Switch>
        </Box>

        <Player
          p="2"
          bg="white"
          position="fixed"
          left="0"
          right="0"
          bottom="0"
        />
      </Box>
    </BrowserRouter>
  )
}
