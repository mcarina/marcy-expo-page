'use client'
import React from 'react'
import Link from 'next/link'
import { menu } from '@/lib/constants'
import { useSelectedLayoutSegment } from 'next/navigation'
import { AlignJustify } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'

export const MobileNav = () => {

    const segment = useSelectedLayoutSegment()

  return (
    <div className="flex w-full flex-col bg-muted/40 p-4">
        <div className="sm:hidden flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
            <Sheet>
                <SheetTrigger asChild >
                    <button className="sm:hidden">
                        <AlignJustify/>
                        <span className="sr-only">abrir / fechar</span>
                    </button>
                </SheetTrigger>
                
                <SheetContent side="left" className="w-full sm:max-w-x">
                        <ul className='flex flex-col items-center p-2 gap-5'>
                            {menu.map(item => {
                                const isActive = segment === item.href.split('/')[1] || (segment === null && item.href === '/')
                                return(
                                    <li key={item.title}>
                                        <Link 
                                            
                                            href={item.href}
                                            className={`p-2 ${isActive ? 'bg-[#adadada6] text-[#ffff]' : 'text-[#ffff]'}`}
                                        >
                                            <span className="text-primary">&gt;</span> ~/
                                            {item.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                </SheetContent>
            </Sheet>
        </div>
    </div>
  )
}