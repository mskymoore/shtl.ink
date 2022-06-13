import Link from 'next/link'
import Image from 'next/image'

export default function Nav(){
    return (
        <nav className='container nav-bar'>      
            <ul className='row'>
                <li className='column'>
                    <Link href='/'>shtl.ink</Link>
                </li>
                <li className='column'>
                    <Link href='/short_codes'>view short codes</Link>
                </li>
                <li className='column'>
                    <Link href='/modify'>modify short code</Link>
                </li>
                <li className='column'>
                     <a href="https://github.com/mskymoore/shtl.ink">
                        <Image src="/GitHub_Logo_White.png" alt="GitHub Logo" width={72} height={16} />
                    </a>
                </li>
            </ul>
        </nav>
    )
}