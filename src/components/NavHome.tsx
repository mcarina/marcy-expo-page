'use client'
import React from 'react'
import Link from 'next/link'
import { menu } from '../lib/constants'
import { useSelectedLayoutSegment } from 'next/navigation'

export const NavHome = () => {
    const segment = useSelectedLayoutSegment()
    return (
    <nav className='navHome'>
        <ul className='flex items-center'>
            {menu.map(item => {
                const isActive = segment === item.href.split('/')[1] || (segment === null && item.href === '/')
                return(
                    <li key={item.title}>
                        <Link 
                            
                            href={item.href}
                            className={`navLink ${isActive ? 'bg-[#adadada6] text-black' : 'text-[#BDBDBDE6]'}`}
                        >
                            <span className="text-primary">&gt;</span> ~/
                            {item.title}
                        </Link>
                    </li>
                )
            })}
        </ul>
    </nav>
    )
}
