import { without } from 'lodash-es'

export const normalizeDuration = (duration: number): string => {
  const minutes = Math.floor(duration / 60)
  const seconds = `${duration % 60}`.padStart(2, '0')

  return `${minutes}:${seconds}`
}

export const startWith = <T>(target: Array<T>, item: T) => {
  return [item, ...without(target, item)]
}
