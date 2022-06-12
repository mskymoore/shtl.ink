import {useRouter}  from 'next/router'
import styles from '../../styles/Layout.module.css'

export default function Url({ url_record }){
    const router = useRouter();
    const { short_code } = router.query

    async function modify_short_code(event){
        event.preventDefault()
        const new_short_code = event.target.new_short_code.value
        const req = await fetch(`http://localhost:8000/modify_short_code`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
                {short_code: url_record.short_code, new_short_code: new_short_code }
              )
        });

        const data = await req.json();
        router.push(`/urls/${data.short_code}`)

    }

    function copy_to_clipboard(){
        navigator.clipboard.writeText(url_record.short_code)
    }

    async function delete_short_code(){
        const req = await fetch(`http://localhost:8000/delete_short_code`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
                {short_code: url_record.short_code}
              )
        });

        const data = await req.json();
        alert(`${data.message}`)
        router.push(`/urls`)
    }

    if (url_record.url){
        return <div className={styles.grid}>
                    <a className={styles.card}>
                        <p className={styles.grid}>
                            <code className={styles.code}>{url_record.short_code}</code>
                            <button onClick={copy_to_clipboard} type="copy">copy</button>
                            <button onClick={delete_short_code} type="delete">delete</button>
                            <form onSubmit={modify_short_code}>
                            <label htmlFor="new_short_code">new short code:</label>
                            <input type="text" id="new_short_code" name="new_short_code" defaultValue="" />
                            <button type="modify">modify</button>
            </form> 
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
