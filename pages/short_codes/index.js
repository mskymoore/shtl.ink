import Router from 'next/router'

export default function AllUrlRecordsList({ urls }) {
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

    return <div className='container'>
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
}

export async function getServerSideProps({ params }) {
    const req = await fetch(`${process.env.API_BASE_URL}/all_short_codes`);
    const data = await req.json();
    
    return {
        props: { urls: data }
    }
}