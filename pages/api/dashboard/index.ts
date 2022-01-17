import axios from 'axios'
// import { default as EnvironmentValriable } from '../../../envConfig'
import type { NextApiRequest, NextApiResponse } from 'next'
import { GET_TEST_ROUTE } from '../constants'

const getHomeContent = async (req: NextApiRequest, res: NextApiResponse) => {
  // Commented for now as there is no route for now
  // TODO: create config file and import keys from there
  const { data, message, status } = {
    data: {
      title: "Hey There.... Welcome to your dashbaord!",
      description: "Here you can manage all the cool stuff you want to see."
    },
    message: {
      messaage: "Data fetched successfully!"
    }, status: 200
  }
  res.status(status).json({ data, message })
}

export default getHomeContent
