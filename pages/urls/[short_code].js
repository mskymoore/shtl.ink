import { useRouter } from 'next/router'

export default function Url({ url_record }){
    const router = useRouter();
    const { short_code } = router.query
    if (url_record.url){
        return <h1>{url_record.url}</h1>
    }
    else {
        return <h1>{url_record.message}</h1>
    }
}


export async function getServerSideProps({ params }){

    const req = await fetch(`http://localhost:8000/get`, {
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