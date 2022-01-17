import * as React from 'react'
import Link from "next/link"
import styles from './header.module.scss'
const Header: React.FC<any> = () => {
  return (
    <header className={`${styles.header}`}>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/dashboard">Dashboard</Link></li>
      </ul>
    </header>
  )
}

export default Header
