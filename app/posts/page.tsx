
import { Inter } from 'next/font/google'
import styles from "./page.module.css"
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Post() {
  return (
    <div>
      <h1 className={styles.color}>hello post</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat libero a reprehenderit dicta adipisci impedit totam voluptatem minima saepe dolor.</p>
    <Link className={styles.cen} href="/">back to Home</Link>
    </div>
  )
}