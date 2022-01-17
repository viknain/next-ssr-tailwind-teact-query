import axios from 'axios'
// import { default as EnvironmentValriable } from '../../../envConfig'
import type { NextApiRequest, NextApiResponse } from 'next'
import { GET_TEST_ROUTE } from '../constants'

const getTest = async (req: NextApiRequest, res: NextApiResponse) => {
  // Commented for now as there is no route for now
  // TODO: create config file and import keys from there
  const API: string = ""!
  const config = { headers: { 'x-api-key': "" } }
  const response = await axios.get(API + GET_TEST_ROUTE, config).catch((err) => {
    console.error(
      'ERROR::: While fetching customer details from external source :::>>',
      JSON.stringify(err, null, 2)
    )
    return err
  })
  const { data, message, status } = response
  res.status(status).json({ data, message })
}

export default getTest
