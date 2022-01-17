import useAxios from '../useAxios'
import { useQuery } from 'react-query'
import { GET_HOME_PAGE_DATA } from '../../application-routes'

export const csGetHomePageData = (fetchDataClientSIde: boolean) => {
  const callApi = useAxios()
  return useQuery(['HOME_PAGE_DATA'], () =>
    callApi({
      method: 'GET',
      url: GET_HOME_PAGE_DATA
    }).then((data) => data.data),
    {
      enabled: Boolean(fetchDataClientSIde)
    }
  )
}
