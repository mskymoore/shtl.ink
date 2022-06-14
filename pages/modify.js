//import styles from '../styles/Layout.module.css'
import Router from 'next/router'

export default function Home() {
  async function go_to_short_code(event){
    event.preventDefault()
    const data = event.target.short_code.value

    const url_regex_pattern = /https?:\/\/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.?[a-z]{0,4}:?[0-9]{0,5}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    const url_regex = RegExp(url_regex_pattern);

    if (data.match(url_regex) && data.includes(process.env.BASE_URL)){
      var short_code = data.split('/')
      short_code = short_code[short_code.length - 1]
      Router.push(`short_codes/${short_code}`)
    }

    else{
      Router.push(`short_codes/${data}`)
    }
  }

  return (
    <div className='container'>
        <h3>modify short code</h3>
          <div className='card'>
            <form onSubmit={go_to_short_code}>
              <fieldset id="code_search">
                <label htmlFor="short_code">short code:</label>
                <input type="text" id="short_code" name="short_code" required={true} minLength={1} maxLength={2000}/>
                <button className="button-black" type="submit">go</button>
              </fieldset>
            </form>
          </div>
    </div>
  )
}
