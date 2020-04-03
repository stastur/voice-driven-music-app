import React from 'react'
import ReactDOM from 'react-dom'

import { Recognition } from './modules/recognition/recognition'
import { initDeezer } from './modules/deezer'

import { App } from './App'

import './index.css'

initDeezer({
  appId: process.env.DEEZER_APP_ID as string,
  channelUrl: window.location.href,
})(() => {
  ReactDOM.render(<App />, document.getElementById('root'))

  const recognition = new Recognition()
    .setLanguage('ru-RU')
    .addCommand({ trigger: 'играть', callback: DZ.player.play })
    .addCommand({ trigger: 'пауза', callback: DZ.player.pause })
    .addCommand({ trigger: 'следующий', callback: DZ.player.next })
    .addCommand({ trigger: 'предыдущий', callback: DZ.player.prev })
    .addCommand({
      trigger: 'громче',
      callback: () => DZ.player.setVolume(DZ.player.getVolume() + 10),
    })
    .addCommand({
      trigger: 'тише',
      callback: () => DZ.player.setVolume(DZ.player.getVolume() - 10),
    })

  recognition.addEventListener('result', event => {
    console.log(event)
  })

  recognition.start()
})
