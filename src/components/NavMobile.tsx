'use client'
import React from 'react'
import Link from 'next/link'
import { useSelectedLayoutSegment } from 'next/navigation'
import { menu } from '@/lib/constants'

export const MobileNav = () => {

    const segment = useSelectedLayoutSegment()

  return (
    <div className="flex w-full flex-col bg-muted/40">
        <div className="sm:hidden flex flex-col  sm:gap-4 sm:py-4 sm:pl-14">
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
        </div>
    </div>
  )
}