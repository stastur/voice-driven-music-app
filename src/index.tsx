import React from 'react'
import ReactDOM from 'react-dom'

import { App } from './App'

import { Recognition } from './modules/recognition/recognition'

import './index.css'

const recognition = new Recognition().addCommand({
  trigger: 'Hi',
  callback: () => alert('Darova'),
})

recognition.addEventListener('result', event => {
  console.log(event)
})

recognition.start()

ReactDOM.render(<App />, document.getElementById('root'))
