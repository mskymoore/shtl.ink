import {useRouter}  from 'next/router'

export default function Url({ url_record }){
    const router = useRouter();
    const { short_code } = router.query

    async function modify_short_code(event){
        event.preventDefault()
        const new_short_code = event.target.new_short_code.value

        if(new_short_code == url_record.short_code){
            return
        }

        const req = await fetch(`/api/modify_short_code`, {
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
            alert(`${data.message}`)
        }

    }

    function copy_to_clipboard(){
        //navigator.clipboard.writeText(url_record.short_code)
        const ta = document.createElement('textarea');
        ta.style.cssText = 'opacity:0; position:fixed; width:1px; height:1px; top:0; left:0;';
        ta.value = `${process.env.BASE_URL}/${url_record.short_code}`;
        document.body.appendChild(ta);
        ta.focus();
        ta.select();
        document.execCommand('copy');
        ta.remove();
    }

    function stop_focus(event){
        event.target.blur()
    }

    async function delete_short_code(){
        const req = await fetch(`/api/delete_short_code`, {
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
        return  <div className="container">
                    <div className='card'>
                    <h3>{url_record.short_code}</h3>
                        <div className='row'>
                        <code className='short-code column'>{process.env.BASE_URL}/{url_record.short_code}</code>&#8921;
                        <code className='column'>{url_record.url}</code><br/>
                        </div>
                        <button className='button-shtl' onFocus={stop_focus} onClick={copy_to_clipboard} type="copy">copy</button>
                        <button className='button-shtl' onClick={delete_short_code} type="delete">delete</button>
                        <form onSubmit={modify_short_code}>
                            <fieldset id="new_code">
                                <label htmlFor="new_short_code">new short code:</label>
                                <input type="text" id="new_short_code" name="new_short_code" required={true} minLength={1} maxLength={33} />
                                <button className='button-shtl' onFocus={stop_focus} type="modify">modify</button>
                            </fieldset>
                        </form>
                    </div>
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
