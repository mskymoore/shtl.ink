import { useRouter } from 'next/router'
import redirect from 'nextjs-redirect'
import Layout from '../components/Layout'

export default function Url({ url_record }){
    const router = useRouter();
    const { short_code } = router.query
    if (url_record.url){
        const Redirect = redirect(`http://localhost:8000/${url_record.short_code}`)
        return <Redirect>
            <Layout>Redirecting to {url_record.url}!</Layout>
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