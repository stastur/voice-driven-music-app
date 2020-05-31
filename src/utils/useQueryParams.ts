import { useLocation } from 'react-router'

export const useQueryParams = () => {
  const { search } = useLocation()

  return new URLSearchParams(search)
}
