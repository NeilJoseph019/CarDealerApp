"use client"

import { carProps } from '@/types'
import React, { useState } from 'react'
import Image from 'next/image'
import CarDetailsCard from '../carDetailCard/CarDetailsCard';

interface carCardProps {
  car : carProps;
  index : number;
}

const CarOverviewCard = ({ car, index } : carCardProps) => {

  const [modalOpen, setModalOpen] = useState(false)

  return (
    <div className='m-5 bg-slate-100 w-[24rem] p-[1rem] border border-zinc-300 rounded-[1rem] shadow-lg hover:bg-white'> 
        <h2 className='font-paragraphs font-bold text-[26px]'> {car.make} {car.model} </h2>
        <div>
          <p className='flex text-[30px]'>
            <span className='self-start font-extrabold text-[1.5rem]'>
              €
            </span>
            52
            <span className='self-end font-paragraphs font-semibold text-[15px]'>
              /day
            </span>
          </p>
        </div>

        <div className='relative w-[17rem] h-40 m-auto'>
          <Image src={'/hero.png'} alt='car model' fill priority sizes='20' />
        </div>

        <div className='relative group flex w-full mt-2'>
          <div className='flex group-hover:invisible w-full justify-between text-grey'>
            <div className='flex flex-col justify-center items-center gap-2'>
              <Image src='/steering-wheel.svg' width={20} height={20} alt='gear' />
              <p className='text-[14px] leading-[17px]'>
                {car.transmission === "a" ? "Automatic" : "Manual"}
              </p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/tyre.svg" width={20} height={20} alt="wheel drive" />
              <p className="text-[14px] leading-[17px]">{car.drive.toUpperCase()}</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-2">
              <Image src="/gas.svg" width={20} height={20} alt="milage" />
              <p className="text-[14px] leading-[17px]">{car.city_mpg} MPG</p>
            </div>
          </div>
          <div className='hidden group-hover:flex absolute bottom-0 w-full z-10'>
              <button className='w-full border-2 px-3 py-2 rounded-[1.5rem] hover:bg-slate-300 hover:border-slate-400 shadow-lg'
              onClick={()=>{
                setModalOpen(true)
              }}
              >
                View More Info
              </button>
          </div>
        </div>

        {/* Modal - car more info */}
        <div className='flex text-center'>
          <CarDetailsCard car={car} open={modalOpen} setModalClose={()=> setModalOpen(false)} />
        </div>
      </div>
       
  )
}

export default CarOverviewCard