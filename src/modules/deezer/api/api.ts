import { curry, isNil, negate } from 'lodash'

type DeezerApiError = {
  error: {
    code: number
    message: string
    type: string
  }
}

export const callToAPI = <TResponse>(
  path: string,
  method?: DeezerSdk.HttpMethod,
  data?: any
) => {
  return new Promise<TResponse | DeezerApiError>((resolve, reject) => {
    const params = [path, method, data, resolve].filter(negate(isNil))
    const curriedFn = curry(DZ.api, params.length)

    try {
      params.reduce((fn, arg) => fn(arg), curriedFn)
    } catch (e) {
      reject(e)
    }
  })
}

export const api = {}
