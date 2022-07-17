import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App on Razzo</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a> on <a href="https://razzo.app">Razzo</a>!
        </h1>
        <p>haha</p>
      </main>

      <footer className={styles.footer}>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="https://razzo.app/logo.png" alt="Razzo Logo" width={72} height={16} />
          </span>
      </footer>
    </div>
  )
}

export default Home
