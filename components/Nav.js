import Link from 'next/link'
import Image from 'next/image'

import navStyles from '../styles/Nav.module.css'

export default function Nav(){
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>shtl.ink</Link>
                </li>
                <li>
                    <Link href='/urls'>view urls list</Link>
                </li>
                <li>
                    <Link href='/modify'>modify a short url</Link>
                </li>
                <li>
                    <a href="https://github.com/mskymoore/shtl.ink">
                        <Image src="/GitHub_Logo_White.png" alt="GitHub Logo" width={72} height={16} />
                    </a>

                </li>
            </ul>
        </nav>
    )
}