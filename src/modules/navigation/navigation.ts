import { History } from 'history'

export const pageUrls = {
  myTracks: '/my-tracks',
  genre: '/genre/:id',
  home: '/',
  artist: '/artist/:id',
}

export class Navigation {
  constructor(private _history: History) {}

  scrollTo = (target: string) => {
    const nodes = document.evaluate(
      // I'd like to simply write //*[matches(text(), "value", "i")], but JS says it's an invalid xpath
      `//div[@id="root"]//*[contains(translate(text(), "ABCDEFGHIJKLMNOPURSTUWXYZ","abcdefghijklmnopurstuwxyz"),"${target.toLowerCase()}")]`,
      document.body
    )
    const node = nodes.iterateNext()

    const element = node?.parentElement

    if (!element) {
      return
    }

    element.scrollIntoView({ behavior: 'smooth' })
  }

  goTo = (target: string) => {
    if (!Object.values(pageUrls).includes(target)) {
      return
    }

    this._history.push(target)
  }

  back = () => {
    this._history.goBack()
  }

  forward = () => {
    this._history.goForward()
  }
}
