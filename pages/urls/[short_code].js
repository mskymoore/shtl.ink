import { useRouter } from 'next/router'
import styles from '../../styles/Layout.module.css'

export default function Url({ url_record }){
    const router = useRouter();
    const { short_code } = router.query

    function copy_to_clipboard(){
        navigator.clipboard.writeText(url_record.short_code)
    }

    if (url_record.url){
        return <div className={styles.grid}>
                    <a className={styles.card}>
                        <p className={styles.grid}>
                            <code className={styles.code}>{url_record.short_code}</code>
                            <button onClick={copy_to_clipboard} type="copy">copy</button>
                            <code className={styles.code}>{url_record.url}</code>
                        </p>
                    </a>
                </div>
    }
    else {
        return <div className={styles.grid}>
                    <a className={styles.card}>
                        <p className={styles.grid}>
                            <code className={styles.code}>{url_record.message}</code>
                        </p>
                    </a>
                </div>
    }
}


export async function getServerSideProps({ params }){

    const req = await fetch(`http://localhost:8000/short_code`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
                {short_code: params.short_code}
              )
        });

    const data = await req.json();
    return {
        props: { url_record: data }
    };
}

/*
export async function getStaticPaths(){
    const req = await fetch(`http://localhost:8000/all`);
    const data = await req.json();
    const paths = data.map(url_record => {
        return { params: { short_code: url_record.short_code }}
    })

    return {
        paths,
        fallback: false
    }
}
*/