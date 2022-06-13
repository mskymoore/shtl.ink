import {useRouter}  from 'next/router'

export default function Home() {
  const router = useRouter();
  async function create_short_code(event){
    event.preventDefault()
    const url = event.target.url.value
    var endpoint = ''
    var body = {}
    if (event.target.short_code.value != ''){
        endpoint = 'create_custom_short_code'
        body = {url: url, short_code: event.target.short_code.value}
    }
    else {
        endpoint = 'create_short_code'
        body = {url: url}
    }

    const req = await fetch(`http://localhost:8000/${endpoint}`, {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(body)
          });

    const data = await req.json();
    if(data.short_code){
      router.push(`/short_codes/${data.short_code}`)
    }
    else{
      alert(`${data.message}`)
    }
    
  }

  return (
    <div className="container">
      <h3>create short url</h3>
      <div className="card">
        <form onSubmit={create_short_code}>
          <fieldset>
          <label htmlFor="url">url:</label>
          <input type="text" id="url" name="url" defaultValue="http://superlong.example.url/gobldygoop" />
          <div className='showHide'>
            <input type="checkbox" id="toggle" />
    
            <label htmlFor="toggle">
                <span className='expand'>
                    custom short code
                    <span className="changeArrow arrow-rt">&nbsp;&gt;</span>
                    <span className="changeArrow arrow-dn">&nbsp;v</span>
                </span>
            </label>
    
            <div className="fieldsetContainer">
                <fieldset id="fdst">
                <input type="text" id="short_code" name="short_code"/>
                </fieldset>
            </div>
          </div>
          <button className="button-black" type="submit">Create</button>
          </fieldset>
        </form> 
      </div>
    </div>
  )
}

