import Router from 'next/router'
import { EmailPasswordAuth } from "supertokens-auth-react/recipe/emailpassword"
import { useEffect, useState } from 'react'

export default function AllUrlRecordsList() {
    const [urls, setUrls] = useState(null)
    const [isLoading, setLoading] = useState(false)

    var copy_to_clipboard = short_code => () => {
        const ta = document.createElement('textarea');
        ta.style.cssText = 'opacity:0; position:fixed; width:1px; height:1px; top:0; left:0;';
        ta.value = `${process.env.BASE_URL}/${short_code}`;
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        ta.remove();
    }

    var go_to_short_code = short_code => () => {
        Router.push(`/short_codes/${short_code}`) 
    }

    function stop_focus(event) {
        event.target.blur()
    }

    useEffect( () => {
        setLoading(true)
         fetch(`/api/all_short_codes`)
            .then((res) => res.json())
            .then((urls) => {
                setUrls(urls)
                setLoading(false)
            })
    },[])

    if (isLoading) return <div className='container'><h3>loading...</h3></div>
    if (!urls) return <div className='container'><h3>no urls...</h3></div>

    return  <EmailPasswordAuth>  
            <div className='container'>
                <h3>short code list</h3>
                {urls.map(url => 
                <div className='card-small' key={url.short_code}>
                    <div className='row'>
                        <code className='short-code column'>{process.env.BASE_URL}/{url.short_code}</code>
                        &#8921;
                        <code className='column'>{url.url}</code>
                       
                    </div>
                    <div className='row'>
                        <button className='button-black column' onFocus={stop_focus} onClick={copy_to_clipboard(url.short_code)}>copy</button>
                        <button className='button-black column' onClick={go_to_short_code(url.short_code)} type="submit">modify</button>
                    </div>
                </div>

                )}
            </div>
            </EmailPasswordAuth>
}


export async function getServerSideProps({ params }) {
    return { props: {}}
}
