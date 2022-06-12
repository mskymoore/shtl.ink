import styles from '../styles/Layout.module.css'
import Router from 'next/router'

export default function Home() {
  async function go_to_short_code(event){
    event.preventDefault()
    const short_code = event.target.short_code.value
    Router.push(`/urls/${short_code}`)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>go to short code</h3>
          <div className={styles.grid}>
            <a className={styles.card}>

            <form onSubmit={go_to_short_code}>
              <label htmlFor="short_code">short code:</label>
              <input type="text" id="short_code" name="short_code" defaultValue="" />
              <button type="go">go</button>
            </form> 
            </a>
          </div>


      </main>
    </div>
  )
}
