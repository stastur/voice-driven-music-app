import React, { useEffect } from 'react'
import { Box, CSSReset, useToast, PseudoBox } from '@chakra-ui/core'
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'

import { Recognition } from './modules/recognition'
import { pageUrls } from './modules/navigation'
import { Player } from './modules/deezer/components/player'
import { Auth } from './modules/deezer/components/auth'
import { Header } from './components/header'
import { Homepage } from './pages/homepage'
import { Genre } from './pages/genre'
import { Artist } from './pages/artist'

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
        <Header>
          <Auth />
          <PseudoBox pl={3} _hover={{ textDecoration: 'underline' }}>
            <Link to={pageUrls.home}>Home</Link>
          </PseudoBox>
        </Header>
        <Box mb="20" as="main">
          <Switch>
            <Route exact path={pageUrls.home}>
              <Homepage />
            </Route>
            <Route exact path={pageUrls.genre}>
              <Genre />
            </Route>
            <Route exact path={pageUrls.artist}>
              <Artist />
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
          zIndex={10}
        />
      </Box>
    </BrowserRouter>
  )
}
