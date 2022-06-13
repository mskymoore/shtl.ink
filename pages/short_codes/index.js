//import styles from '../../styles/Layout.module.css'
import Router from 'next/router'

export default function AllUrlRecordsList({ urls }) {
    var copy_to_clipboard = short_code => () => {
        navigator.clipboard.writeText(short_code)
    }

    var go_to_short_code = short_code => () => {
        Router.push(`short_codes/${short_code}`) 
    }

    return <div className='container'>
                <h3>short code list</h3>
                {urls.map(url => 
                <div className='card-small' key={url.short_code}>
                    <div className='row'>
                        <code className='short-code column'>{url.short_code}</code>
                        &#8921;
                        <code className='column'>{url.url}</code>
                       
                    </div>
                    <div className='row'>
                        <button className='button-black column' onClick={copy_to_clipboard(url.short_code)} type="reset">copy</button>
                        <button className='button-black column' onClick={go_to_short_code(url.short_code)} type="submit">modify</button>
                    </div>
                </div>

                )}
            </div>
}

export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:8000/all_short_codes`);
    const data = await req.json();
    
    return {
        props: { urls: data }
    }
}