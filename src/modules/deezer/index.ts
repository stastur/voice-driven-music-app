type InitOptions = {
  appId: string
  channelUrl: string
}

const DEEZER_SDK_CDN_LINK = 'https://e-cdns-files.dzcdn.net/js/min/dz.js'
const DEEZER_CONTAINER_ID = 'dz-root'

export const initDeezer = ({ appId, channelUrl }: InitOptions) => {
  const dzRoot = document.createElement('div')

  dzRoot.id = DEEZER_CONTAINER_ID
  document.body.appendChild(dzRoot)

  const script = document.createElement('script')

  script.src = DEEZER_SDK_CDN_LINK
  script.async = true

  return (onPlayerLoad: () => void) => {
    document.head.appendChild(script)
    ;(window as any).dzAsyncInit = () => {
      DZ.init({
        appId,
        channelUrl,
        player: {
          onload: onPlayerLoad,
        },
      })
    }
  }
}
