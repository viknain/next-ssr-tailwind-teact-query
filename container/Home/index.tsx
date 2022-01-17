import * as React from 'react'

const Home: React.FC<any> = ({homeData}) => {
  return (
    <div>
      <h2>{homeData.title}</h2>
      <p>{homeData.description}</p>
    </div>
  )
}

export default Home
