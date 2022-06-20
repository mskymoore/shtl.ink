import Link from 'next/link'
import Image from 'next/image'
import { useRouter }  from 'next/router'
import { signOut } from "supertokens-auth-react/recipe/emailpassword"
import Session from 'supertokens-auth-react/recipe/session'
import { useEffect, useState } from 'react'

export default function Nav(){
    const [user, setUser] = useState(null)
    const router = useRouter();

    async function onLogout() {
        await signOut();
        setUser(null)
        router.push('/signout');
    }

    useEffect( () => {
        async function checkSession(){

            if (await Session.doesSessionExist()){
                setUser(await Session.getUserId())
            }
            else {
                setUser(null)
            }
        }
        checkSession() 
    }, [])

    var goToRoute = route => () => {
        router.push(route)
    }

    var authComponent
    if (user === null) {
        authComponent = (<li onClick={goToRoute('/auth')} className='column'>
                            <Link href='/auth'>sign in</Link>
                         </li>)
    }
    else {
        authComponent = (<li onClick={onLogout} className='column'>
                            <Link href=''>sign out</Link>
                         </li>)
    }
    
    return (
        <nav className='container nav-bar'>      
            <ul className='row'>
                <li onClick={goToRoute('/')} className='column'>
                    <Link href='/'>shtl.ink</Link>
                </li>
                <li onClick={goToRoute('/short_codes')} className='column'>
                    <Link href='/short_codes'>view short codes</Link>
                </li>
                <li onClick={goToRoute('/modify')} className='column'>
                    <Link href='/modify'>modify short code</Link>
                </li>
                {authComponent}
                <li className='column'>
                     <a href="https://github.com/mskymoore/shtl.ink">
                        <Image src="/GitHub_Logo_White.png" alt="GitHub Logo" width={72} height={16} />
                    </a>
                </li>
            </ul>
        </nav>
    )
}