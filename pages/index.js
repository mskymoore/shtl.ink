import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Layout.module.css'

export default function Home() {
  async function create_short_code(event){
    event.preventDefault()
    const url = event.target.url.value

    const req = await fetch(`http://localhost:8000/create_short_code`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
                {url: url}
              )
        });

    const data = await req.json();
    alert(`${data.short_code} -> ${data.url}`)
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h3 className={styles.title}>create short url</h3>
          <div className={styles.grid}>
            <a className={styles.card}>

            <form onSubmit={create_short_code}>
              <label htmlFor="url">url:</label>
              <input type="text" id="url" name="url" defaultValue="http://superlong.example.url/gobldygoop" />
              <button type="create">Create</button>
            </form> 
            </a>
          </div>


      </main>
    </div>
  )
}

