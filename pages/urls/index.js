import styles from '../../styles/Layout.module.css'


export default function AllUrlRecordsList({ urls }) {
    
    return <div>
                {urls.map(url => 

                <div key={url.short_code} className={styles.grid}>
                    <a className={styles.card}>
                        <p className={styles.grid}>
                            <code className={styles.code}>{url.short_code}</code>
                            <code className={styles.code}>{url.url}</code>
                        </p>
                    </a>
                </div>

                )}
            </div>
}

export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:8000/all`);
    const data = await req.json();
    
    return {
        props: { urls: data }
    }
}