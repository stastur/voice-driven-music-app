import { noop } from 'lodash-es'

import {
  ICommand,
  IRecognition,
  ISpeechEventType,
  ISpeechEventListener,
} from './types'

const DEFAULT_LANGUAGE = 'en-US'
const DEFAULT_MAX_ALTERNATIVES = 5

export class Recognition implements IRecognition {
  private _recognition: SpeechRecognition
  private _commandsMap = new Map<string, () => void>() //TODO: commands structure, typing
  private _eventListenersMap = new Map<ISpeechEventType, ISpeechEventListener>()

  constructor() {
    const SpeechRecognition = (window as any).webkitSpeechRecognition

    if (!SpeechRecognition) {
      throw new Error('Speech recognition is not supported by your browser')
    }

    this._recognition = new SpeechRecognition()

    this._recognition.maxAlternatives = DEFAULT_MAX_ALTERNATIVES
    this._recognition.lang = DEFAULT_LANGUAGE
    this._recognition.interimResults = false
    this._recognition.continuous = false

    this._initializeEventHandlers()
  }

  setLanguage = (lang: string) => {
    this._recognition.lang = lang
    return this
  }

  setAlternatives = (alternativesNumber: number) => {
    this._recognition.maxAlternatives = alternativesNumber
    return this
  }

  setInterimResults = (interimResults: boolean) => {
    this._recognition.interimResults = interimResults
    return this
  }

  setContinuous = (continuous: boolean) => {
    this._recognition.continuous = continuous
    return this
  }

  private _initializeEventHandlers = () => {
    ;[
      'speechstart',
      'speechend',
      'soundstart',
      'soundend',
      'nomatch',
      'error',
      'audiostart',
      'audioend',
      'result',
      'start',
      'end',
    ].forEach(type =>
      this._recognition.addEventListener(type, event =>
        this._getEventListener(type as ISpeechEventType)(event)
      )
    )

    this._recognition.addEventListener('result', event => {
      const results = event.results[event.resultIndex]

      for (const result of results) {
        this._getCommandCallback(result.transcript)()
      }
    })

    this._recognition.addEventListener('end', () => {
      this.start()
    })
  }

  private _getCommandCallback = (result: string) => {
    return (
      this._commandsMap.get(result.toLocaleLowerCase(this._recognition.lang)) ||
      noop
    )
  }

  private _getEventListener = (event: ISpeechEventType) => {
    return this._eventListenersMap.get(event) || noop
  }

  addCommand = (command: ICommand) => {
    this._commandsMap.set(
      command.trigger.toLocaleLowerCase(this._recognition.lang),
      command.callback
    )
    return this
  }

  addCommands = (commands: ICommand[]) => {
    commands.forEach(this.addCommand)
    return this
  }

  addEventListener = (
    type: ISpeechEventType,
    listener: ISpeechEventListener
  ) => {
    this._eventListenersMap.set(type, listener)
  }

  removeEventListener = (type: ISpeechEventType) => {
    this._eventListenersMap.delete(type)
  }

  start = () => {
    this._recognition.start()
  }

  abort = () => {
    this._recognition.abort()
  }

  stop = () => {
    this._recognition.stop()
  }
}