import React from 'react'
import NavItem from './NavItem';

interface Link{
    path:string;
    title:string;
}

interface MobileMenuProps{
    links:Link[];
}

const MobileMenu = ({links}:MobileMenuProps) => {
  return (
    <ul className='flex flex-col py-4 items-center'>
        {links.map((link,index)=>(
            <li key={index}>
                <NavItem href={link.path} title={link.title}/>
            </li>
        ))}

    </ul>
  )
}

export default MobileMenu