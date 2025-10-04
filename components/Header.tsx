import Link from 'next/link'
import { headers } from 'next/headers'
import React from 'react'
import Image from 'next/image'
import Navitems from './Navitems'
import UseDropdown from './UseDropdown'
import { searchStocks } from '@/lib/actions/finnhub.actions'

const Header = async ({user}: { user: User}) => {
  const initialStocks = await searchStocks();

  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image src="/assets/icons/logo.svg" alt="stockinger-logo" width={140} height={32} className='h-8 w-auto cursor-pointer'/>
        </Link>
        <nav className='hidden sm:block'>
          <Navitems initialStocks={initialStocks} />
        </nav>

        <UseDropdown user={user} initialStocks={initialStocks} />
      </div>
    </header>
  )
}

export default Header