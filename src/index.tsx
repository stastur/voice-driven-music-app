import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@chakra-ui/core'

import { initDeezer } from './modules/deezer'

import { App } from './App'

const appId = process.env.REACT_APP_DEEZER_APP_ID || ''
const channelUrl = window.location.href + 'channel.html' //TODO: May cause some routing issues in future, but for now it's okay

initDeezer({
  appId,
  channelUrl,
  onload: () => {
    ReactDOM.render(
      <ThemeProvider>
        <App />
      </ThemeProvider>,
      document.getElementById('root')
    )
  },
})
