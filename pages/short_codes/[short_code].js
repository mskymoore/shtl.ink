import {useRouter}  from 'next/router'
//import styles from '../../styles/Layout.module.css'

export default function Url({ url_record }){
    const router = useRouter();
    const { short_code } = router.query

    async function modify_short_code(event){
        event.preventDefault()
        const new_short_code = event.target.new_short_code.value

        if(new_short_code == url_record.short_code){

        }

        const req = await fetch(`${process.env.API_BASE_URL}/modify_short_code`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
                {short_code: url_record.short_code, new_short_code: new_short_code }
              )
        });

        const data = await req.json();

        if(data.short_code){
            router.push(`/short_codes/${data.short_code}`)
        }

        else {
            return <div>
                        <code>{data.message}</code>
                   </div>
        }

    }

    function copy_to_clipboard(){
        navigator.clipboard.writeText(url_record.short_code)
    }

    function stop_focus(event){
        event.target.blur()
    }

    async function delete_short_code(){
        const req = await fetch(`${process.env.API_BASE_URL}/delete_short_code`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(
                {short_code: url_record.short_code}
              )
        });

        const data = await req.json();
        alert(`${data.message}`)
        router.push(`/short_codes`)
    }

    if (url_record.url){
        return <div className='card'>
                    <code>{process.env.API_BASE_URL}/{url_record.short_code}</code>&#8921;
                    <code>{url_record.url}</code><br/>
                    <button className='button-black' onFocus={stop_focus} onClick={copy_to_clipboard} type="copy">copy</button>
                    <button className='button-black' onClick={delete_short_code} type="delete">delete</button>
                    <form onSubmit={modify_short_code}>
                        <label htmlFor="new_short_code">new short code:</label>
                        <input type="text" id="new_short_code" name="new_short_code" defaultValue="" />
                        <button className='button-black' onFocus={stop_focus} type="modify">modify</button>
                    </form>
                </div>
    }
    else {
        return <div>
                    <a>
                        <p>
                            <code>{url_record.message}</code>
                        </p>
                    </a>
                </div>
    }
}


export async function getServerSideProps({ params }){

    const req = await fetch(`${process.env.API_BASE_URL}/short_code`, {
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
