import Link from 'next/link'
import Image from 'next/image'

export default function Nav(){
    return (
        <nav className='nav-bar'>
            <ul className='nav-row row'>
                <li className='nav-item column'>
                    <Link href='/'>shtl.ink</Link>
                </li>
                <li className='nav-item column'>
                    <Link href='/short_codes'>view short codes</Link>
                </li>
                <li className='nav-item column'>
                    <Link href='/modify'>modify short code</Link>
                </li>
                <li className='nav-item column'>
                     <a href="https://github.com/mskymoore/shtl.ink">
                        <Image src="/GitHub_Logo_White.png" alt="GitHub Logo" width={72} height={16} />
                    </a>
                </li>
            </ul>
        </nav>
    )
}