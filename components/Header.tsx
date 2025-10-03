import Link from 'next/link'
import { headers } from 'next/headers'
import React from 'react'
import Image from 'next/image'
import Navitems from './Navitems'
import UseDropdown from './UseDropdown'

const Header = ({user}: { user: User}) => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt="stockinger-logo" width={140} height={32} className='h-8 w-auto cursor-pointer'/>
        </Link>
        <nav className='hidden sm:block'>
          <Navitems />
        </nav>

        <UseDropdown user={user} />
      </div>
    </header>
  )
}

export default Header