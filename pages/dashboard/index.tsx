import { InferGetStaticPropsType } from 'next'
import * as React from 'react'
import Dashboard from '../../container/Dashboard'
import Home from '../../container/Home'
import { csGetDashboardPageData } from '../../utility/services/hooks/dashboard'
import { ssrGetDashboardPageData } from '../../utility/ssr-api-routes'

const DashboardPage = ({ dashboardData }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const [fetchDataClientSIde, setFetchDataClientSide] = React.useState<boolean>(false)
  const { data, isLoading } = csGetDashboardPageData(fetchDataClientSIde)
  React.useEffect(() => {
    if (!dashboardData) {
      setFetchDataClientSide(true)
    }
  }, [dashboardData])
  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <Dashboard dashboardData={(dashboardData?.data) || data} />
      )}

    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const responses = await Promise.all([ssrGetDashboardPageData()]);
    return {
      props: {
        dashboardData: responses[0],
      },
    }
  } catch (err) {
    return {
      props: {
        dashboardData: null,
      },
    }
  }

}

export default DashboardPage

