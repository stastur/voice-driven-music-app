type Command = {
  triggers: string[]
  handler: () => void
}

export class Recognition {
  private _recognition: SpeechRecognition
  private _commands: Command[] = []

  constructor(recognitionModule: SpeechRecognition) {
    this._recognition = recognitionModule
  }

  setLanguage(lang: string) {
    this._recognition.lang = lang
    return this
  }

  addCommand(command: Command) {
    //TODO: add command to recognition's grammar
    return this
  }

  start() {
    this._recognition.onresult = event => {} //TODO: process results using matchResult method
    this._recognition.start()
  }

  stop() {
    this._recognition.stop()
  }

  private matchResult(result: SpeechRecognitionResult) {
    this._commands
      .filter(({ triggers }) => triggers.includes(result as any)) //TODO: take matched command string from result and find command
      .forEach(({ handler }) => handler()) //TODO: here might be a way to get some params from SpeechRecognitionResult, so think about passing them to handler
  }
}
