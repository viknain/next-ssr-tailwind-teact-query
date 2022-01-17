import React from 'react'
import type { AppProps } from 'next/app'
import store, { persistor } from '../store/store'
import { Provider } from 'react-redux'
import Layout from '../container/Layout'
import '../styles/globals.scss'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClientProvider, QueryClient } from 'react-query'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false
    }
  }
})

const MyApp: React.FC<any> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      {process.browser ? (
        <PersistGate loading={null} persistor={persistor}>
          <QueryClientProvider client={queryClient}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </QueryClientProvider>
        </PersistGate>
      ) : (
        <QueryClientProvider client={queryClient}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </QueryClientProvider>
      )}
    </Provider>
  )
}
export default MyApp
