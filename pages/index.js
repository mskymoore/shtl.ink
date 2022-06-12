import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>shtl.ink</title>
        <meta name="description" content="url shortener" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}></h1>
          <div className={styles.grid}>
            <a className={styles.card}>
              <h2>Create Short URL &rarr;</h2>
              <p className={styles.grid}>
                <code className={styles.code}>http://superlong.example.url/gobldygoop</code>
              </p>
            </a>
          </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/mskymoore/url_shortener"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get the source on{' '}
          <span className={styles.logo}>
            <Image  src="/GitHub_Logo.png" alt="GitHub Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
