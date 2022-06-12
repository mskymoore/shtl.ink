export default function AllUrlRecordsList({ urls }) {
    
    return <h1>
                URL Records List: 
                {urls.map(url => 
                <div key={url.short_code}>
                    -----------<br></br>
                    {url.short_code}-~/<br></br>
                    {url.url}
                </div>)}
            </h1>
}

export async function getServerSideProps({ params }) {
    const req = await fetch(`http://localhost:8000/all`);
    const data = await req.json();
    
    return {
        props: { urls: data }
    }
}