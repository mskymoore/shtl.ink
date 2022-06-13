//import styles from '../../styles/Layout.module.css'
import Router from 'next/router'

export default function AllUrlRecordsList({ urls }) {
    var copy_to_clipboard = short_code => () => {
        navigator.clipboard.writeText(short_code)
    }

    var go_to_short_code = short_code => () => {
        Router.push(`short_codes/${short_code}`) 
    }

    return <div>
                <h3>short code list</h3>
                {urls.map(url => 

                <div key={url.short_code}>
                    <a>
                        <p>
                            <code>{url.short_code}</code>
                            <a>&#8921;</a>
                            <code>{url.url}</code>
                            <button onClick={copy_to_clipboard(url.short_code)} type="submit">copy</button>
                            <button onClick={go_to_short_code(url.short_code)} type="submit">modify</button>
                        </p>
                    </a>
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