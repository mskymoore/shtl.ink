import styles from '../../styles/Layout.module.css'
import Router from 'next/router'

export default function AllUrlRecordsList({ urls }) {
    var copy_to_clipboard = short_code => () => {
        navigator.clipboard.writeText(short_code)
    }

    var go_to_short_code = short_code => () => {
        Router.push(`/urls/${short_code}`) 
    }

    return <div>
                <h3 className={styles.title}>short code list</h3>
                {urls.map(url => 

                <div key={url.short_code} className={styles.grid}>
                    <a className={styles.card}>
                        <p className={styles.grid}>
                            <code className={styles.code}>{url.short_code}</code>
                            <button onClick={copy_to_clipboard(url.short_code)} type="copy">copy</button>
                            <button onClick={go_to_short_code(url.short_code)} type="go">modify</button>
                            <code className={styles.code}>{url.url}</code>
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