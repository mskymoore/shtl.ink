import Link from 'next/link'

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
            </ul>
        </nav>
    )
}