//import styles from '../styles/Layout.module.css'
//import styles from '../styles/milligram.css'

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
    <div className="container">
      <h3>create short url</h3>
      <div className="card">
        <form onSubmit={create_short_code}>
          <fieldset>
          <label htmlFor="url">url:</label>
          <input type="text" id="url" name="url" defaultValue="http://superlong.example.url/gobldygoop" />
          <button className="button-black" type="submit">Create</button>
          </fieldset>
        </form> 
      </div>
    </div>
  )
}

