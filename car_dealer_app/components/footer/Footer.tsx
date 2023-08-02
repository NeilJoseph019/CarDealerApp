import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { footerLinks } from '@/constants'

const Footer = () => {
  return (
    <footer className='border-t-2 border-gray-200 bg-slate-100 p-2 font-paragraphs'>
      <div className='p-3 flex justify-between'>

        <div className=''>
          <div className='flex ml-4 '>
              <Image src={'/car-256.png'} alt='Car logo' height={55} width={55} />
              <h1 className='mt-2 font-logo font-bold text-[1rem] md:text-[1.5rem] text-black'>CarDeal</h1>
          </div>
          <div className='font-paragraphs '>
            <p> CarDeal 2023</p>
            <p>All Rights Reserved &copy;</p>
          </div>
        </div>
          
        <div className='ml-7 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8 '>
          {
            footerLinks.map(link =>(
              <div key={link.title} className='flex flex-col flex-wrap'>
                <p className='font-bold'> {link.title} </p>
                {
                  link.links.map(links =>(
                    <Link key={links.title} href={links.url} className='hover:bg-slate-200 rounded-[1rem] px-2' >{links.title}</Link>
                  ))
                }
              </div>
            ))
          }
          
        </div>

      </div>
    </footer>
  )
}

export default Footer
