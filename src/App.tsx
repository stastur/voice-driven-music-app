import React, { useEffect, Fragment, useCallback } from 'react'
import { Box, CSSReset, useToast, PseudoBox } from '@chakra-ui/core'
import { Switch, Route, Link, useHistory } from 'react-router-dom'

import { Recognition } from './modules/recognition'
import { pageUrls, Navigation } from './modules/navigation'
import { Player } from './modules/deezer/components/player'
import { Auth } from './modules/deezer/components/auth'
import { Header } from './components/header'
import { Homepage } from './pages/homepage'
import { Genre } from './pages/genre'
import { Artist } from './pages/artist'
import { MyTracks } from './pages/myTracks'
import { api } from './modules/deezer/api'
import { SearchResults } from './pages/searchResults'
import { SearchInput } from './components/searchInput'

export function App() {
  const toast = useToast()
  const history = useHistory()

  const handleSearch = useCallback(
    (query: string) => history.push(`${pageUrls.search}?q=${query}`),
    [history]
  )

  useEffect(() => {
    const navigation = new Navigation(history)
    const recognition = new Recognition()
      .setAlternatives(1)
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
      .addCommand({
        trigger: 'go to (.+)',
        callback: args => {
          navigation.scrollTo(args[0])
        },
      })
      .addCommand({
        trigger: 'like',
        callback: () => {
          api.user.addToFavorites(Number(DZ.player.getCurrentTrack().id))
        },
      })
      .addCommand({
        trigger: 'dislike',
        callback: () => {
          api.user.removeFromFavorites(Number(DZ.player.getCurrentTrack().id))
        },
      })
      .addCommand({
        trigger: 'search for (.+)',
        callback: args => {
          handleSearch(args[0])
        },
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
  }, [toast, history, handleSearch])

  return (
    <Fragment>
      <CSSReset />
      <Box>
        <Header>
          <Auth />
          <SearchInput
            display="flex"
            justifyContent="center"
            paddingLeft={2}
            onSearchClick={handleSearch}
          />
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
            <Route exact path={pageUrls.myTracks}>
              <MyTracks />
            </Route>
            <Route exact path={pageUrls.search}>
              <SearchResults />
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
    </Fragment>
  )
}
