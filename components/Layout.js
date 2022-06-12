import styles from '../styles/Layout.module.css'
import Head from 'next/head'
import Nav from './Nav'

export default function Layout({ children }){
    return (
    <div className={styles.container}>
        <Head>
            <title>shtl.ink</title>
            <meta name="description" content="url shortener" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Nav></Nav>
        <main className={styles.main}>
            {children}
        </main>
    </div>
    )
}