import React from 'react'
import ReactDOM from 'react-dom'

import { Recognition } from './modules/recognition'
import { initDeezer } from './modules/deezer'

import { App } from './App'

const appId = process.env.REACT_APP_DEEZER_APP_ID || ''
const channelUrl = window.location.href + 'channel.html' //TODO: May cause some routing issues in future, but for now it's okay

initDeezer({
  appId,
  channelUrl,
  onload: () => {
    ReactDOM.render(<App />, document.getElementById('root'))

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
      console.log(event)
    })

    recognition.start()
  },
})
