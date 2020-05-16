type InitOptions = {
  appId: string
  channelUrl: string
  onload: () => void
}

const DEEZER_SDK_CDN_LINK = 'https://e-cdns-files.dzcdn.net/js/min/dz.js'
const DEEZER_CONTAINER_ID = 'dz-root'

const initDeezer = ({ appId, channelUrl, onload }: InitOptions) => {
  const dzRoot = document.createElement('div')

  dzRoot.id = DEEZER_CONTAINER_ID
  document.body.appendChild(dzRoot)

  const script = document.createElement('script')

  script.src = DEEZER_SDK_CDN_LINK

  document.head.appendChild(script)
  ;(window as any).dzAsyncInit = () => {
    DZ.init({
      appId,
      channelUrl,
      player: {
        onload,
      },
    })
  }
}

export { initDeezer }
