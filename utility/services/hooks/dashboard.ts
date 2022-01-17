import useAxios from '../useAxios'
import { useQuery } from 'react-query'
import { GET_DASHBOARD_PAGE_DATA } from '../../application-routes'

export const csGetDashboardPageData = (fetchDataClientSIde: boolean) => {
    const callApi = useAxios()
    return useQuery(['DASHBOARD_PAGE_DATA'], () =>
        callApi({
            method: 'GET',
            url: GET_DASHBOARD_PAGE_DATA
        }).then((data) => data.data),
        {
            enabled: Boolean(fetchDataClientSIde)
        }
    )
}
