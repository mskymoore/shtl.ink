import styles from '../styles/Layout.module.css'
import Nav from './Nav'

export default function Layout({ children }){
    return (
    <div className={styles.container}>
        <Nav></Nav>
        <main className={styles.main}>
            {children}
        </main>
    </div>
    )
}