import Link from 'next/link'
import Image from 'next/image'

import navStyles from '../styles/Nav.module.css'

export default function Nav(){
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Create New Short Url</Link>
                </li>
                <li>
                    <Link href='/urls'>View Urls List</Link>
                </li>
                <li>
                    <Link href='/modify'>Modify A Short Url</Link>
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