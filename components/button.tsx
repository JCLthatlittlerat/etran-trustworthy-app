import Link from 'next/link'
import React from 'react'

function button() {
  return (
    <button className="capitalize p-2 text-xs  md:p-3 md:text-sm lg:p-4 lg:text-xl text-(--forground) bg-(--accent-1) rounded-lg cursor-pointer hover:bg-(--accent-2)">
        <Link href={'https://apps.apple.com/ca/app/etran-mobile-payments/id1331605266'}>get started</Link>
    </button>
  )
}

export default button