import React from 'react'
import styles from './Layout.module.scss'

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.wrapper}>{children}</div>
  )
}

