import { InferGetStaticPropsType } from 'next'
import * as React from 'react'
import Home from '../container/Home'
import { csGetHomePageData } from '../utility/services/hooks/home'
import { ssrGetHomePageData } from '../utility/ssr-api-routes'

const HomePage = ({ homeData }: InferGetStaticPropsType<typeof getServerSideProps>) => {
  const [fetchDataClientSIde, setFetchDataClientSide] = React.useState<boolean>(false)
  const { data, isLoading } = csGetHomePageData(fetchDataClientSIde)
  React.useEffect(() => {
    if (!homeData) {
      setFetchDataClientSide(true)
    }
  }, [homeData])
  return (
    <>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <Home homeData={(homeData?.data) || data} />
      )}

    </>
  )
}

export const getServerSideProps = async () => {
  try {
    const responses = await Promise.all([ssrGetHomePageData()]);
    return {
      props: {
        homeData: responses[0],
      },
    }
  } catch (err) {
    return {
      props: {
        homeData: null,
      },
    }
  }

}

export default HomePage
