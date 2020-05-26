export type ICommand = {
  trigger: string
  callback: (args: Array<string>) => void
}

export type ISpeechEventType = keyof SpeechRecognitionEventMap

export type ISpeechEventListener = (
  event: Event | SpeechRecognitionEvent
) => void

export type IRecognition = {
  setLanguage: (lang: string) => IRecognition
  setAlternatives: (alternativesNumber: number) => IRecognition
  setContinuous: (continuous: boolean) => IRecognition
  setInterimResults: (interimResults: boolean) => IRecognition

  addCommand: (command: ICommand) => IRecognition
  addCommands: (commands: ICommand[]) => IRecognition

  addEventListener: (
    type: ISpeechEventType,
    listener: ISpeechEventListener
  ) => void
  removeEventListener: (event: ISpeechEventType) => void

  abort: () => void
  start: () => void
  stop: () => void
}
