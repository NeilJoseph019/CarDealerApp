// @ts-ignore
import Hero from '@Components/hero/Hero'

import {getCarData} from '@/utils'
import CarOverviewCard from '@/components/carOverviewCard/CarOverviewCard'
import FilterForm from '@/components/filterForm/FilterForm'
import { filterProps } from '@/types';

interface paramsProps {
  searchParams : filterProps;
}

export default async function Home({ searchParams } : paramsProps) {

  const carData = await getCarData({
    manufacturer :searchParams.manufacturer || 'bmw',
    model : searchParams.model || '',
    limit : searchParams.limit || 10,
  })

  const dataAvailable = !Array.isArray(carData) || carData.length <1 || !carData

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div>
        <FilterForm/>
      </div>
      <div>
        {
          dataAvailable ? (
            <div>
              <p> Oops, no results </p>
              <p> {carData} </p>
            </div>
          ): (
            <section className='flex items-center justify-center bg-slate-200 m-10 rounded-[1rem]'>
              <div className='grid md:grid-cols-2 xl:grid-cols-3 m-4 p-2 '>
                  { carData.map((car, index)  => (
                      <div key={index}>
                          <CarOverviewCard car={car} index={index}/>
                      </div>
                  ))
                }
              </div>
            </section>
          )

        
         }

      </div>
    </main>
  )
}
