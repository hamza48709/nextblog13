import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      hello world
      <br />

      <Link className={styles.cen} href="./posts">go to post</Link>
    </div>
  )
}
