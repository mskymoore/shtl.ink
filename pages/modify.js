//import styles from '../styles/Layout.module.css'
import Router from 'next/router'

export default function Home() {
  async function go_to_short_code(event){
    event.preventDefault()
    const short_code = event.target.short_code.value
    Router.push(`short_codes/${short_code}`)
  }

  return (
    <div className='container'>
        <h3>modify short code</h3>
          <div className='card'>
            <form onSubmit={go_to_short_code}>
              <label htmlFor="short_code">short code:</label>
              <input type="text" id="short_code" name="short_code" defaultValue="" />
              <button className="button-black" type="submit">go</button>
            </form>
          </div>
    </div>
  )
}
