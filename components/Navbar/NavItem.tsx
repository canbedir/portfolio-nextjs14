import Link from 'next/link'
import React from 'react'

interface NavItemProps{
    href:string;
    title:string;
}

const NavItem = ({href,title}:NavItemProps) => {
  return (
    <Link href={href}
     className='block py-2 pl-3 text-mycolor-700 text-xl hover:text-white/75'
    >
        <div className='font-roboto'>{title}</div>
    </Link>
  )
}

export default NavItem