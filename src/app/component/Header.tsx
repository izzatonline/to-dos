import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <header className='flex h-24 justify-center bg-black'>
        <nav className='container'>
            <div className='flex items-center justify-start gap-2 text-sm text-white mt-10'>
                <Link href="/">
                    <div className='bg-slate-400 px-6 py-2 border-slate rounded mx-2 hover:bg-slate-500'>
                        Home
                    </div>
                </Link>
                <Link href="/todos">
                    <div className='bg-slate-400 px-6 py-2 border-slate rounded mx-2 hover:bg-slate-500'>
                        Todos
                    </div>
                </Link>
            </div>
        </nav>
    </header>
  )
}

export default Header