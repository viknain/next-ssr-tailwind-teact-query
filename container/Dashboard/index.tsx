import * as React from 'react'
import styles from './dashboard.module.scss'

const Dashboard: React.FC<any> = ({dashboardData}) => {
  return (
   <div className={`${styles.maindashborad}`}>
    <h2>{dashboardData.title}</h2>
    <p>{dashboardData.description}</p>
    </div>
  )
}

export default Dashboard
