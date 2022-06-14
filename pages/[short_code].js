import { useRouter } from 'next/router'
import redirect from 'nextjs-redirect'
import Layout from '../components/Layout'

export default function Url({ url_record }){
    const router = useRouter();
    const { short_code } = router.query
    if (url_record.url){
        const Redirect = redirect(`${process.env.API_BASE_URL}/${url_record.short_code}`)
        return <Redirect>
            <div>Redirecting to {url_record.url}!</div>
        </Redirect>
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