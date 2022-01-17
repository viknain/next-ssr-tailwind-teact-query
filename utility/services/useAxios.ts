import { useCallback } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'

/**
 * Returns a function that can be used to call an API.
 * This function wraps the axios instance.
 */
export default () => {
  const router = useRouter()
  const callApi = useCallback(async ({ headers, ...rest }) => {
    try {
      const { data } = await axios({
        headers: {
          'Content-Type': 'application/json',
          ...headers
        },
        ...rest,
        validateStatus: (status) => status >= 200 && status <= 299
      })
      return data
    } catch (err: any) {
      if (err && err.response && err.response.status === 401) {
        // router.push('/login')
      } else if (err && err.response && err.response.status === 503) {
        router.push('/404')
      }
      throw err
    }
  }, [])

  return callApi
}
