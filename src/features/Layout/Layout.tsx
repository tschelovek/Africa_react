import React from "react"
import styles from "./layout.module.css"

interface ILayoutProps {
  children?: React.ReactNode
}

export function Layout({ children }: ILayoutProps) {
  return <main className={styles.main}>{children}</main>
}
