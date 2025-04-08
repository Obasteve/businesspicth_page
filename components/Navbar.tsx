//"use client";
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { auth, signOut, signIn } from '@/auth'
import { loginAction, logoutAction } from '../app/actions';


const Navbar = async() => {
  const session = await auth();
  console.log("Session data:", session); //

  return (
    <header className='px-3 py-2 bg-white shadow-sm font-work-sans h-15'>
        <nav className='flex justify-between items-center'>
            <Link  href="/">
                <Image src="/logo.jpg"  alt="logo" width={60} height={10}/>
              </Link>
              <div className='flex items-center  gap-5 text-black'> 
               {session ?.user ? (
                <>
                    <Link href="/startup/create">
                     
                      <span> Create</span>
                    </Link>
                     <form action={logoutAction}>

                    <button type='submit'>
                        <span>Logout</span>

                    </button>
                    </form>
                    <Link href={session?.user?.id ? `/user/${session.user?.id}`: '#'}>
                       <span>{session?.user?.name}</span>
                    </Link>
                </>
               ) : (

                <form action={loginAction}>

                <button type='submit'>
                    <span>Login</span>

                </button>
                </form>
                  //<button onClick={()=>signIn('github')}>
                    //<span> Login </span>
                  //</button>
               )}
              
              </div>
        </nav>
    </header>
  )
}

export default Navbar