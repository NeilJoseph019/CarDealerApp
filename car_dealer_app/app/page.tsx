// @ts-ignore
import OptionsBar from '@/components/optionsBar/OptionsBar'
import SearchBar from '@/components/searchBar/SearchBar'
import Hero from '@Components/hero/Hero'
import Image from 'next/image'

import {getCarData} from '@/utils'
import CarOverviewCard from '@/components/carOverviewCard/CarOverviewCard'

export default async function Home() {

  const carData = await getCarData()

  const dataAvailable = !Array.isArray(carData) || carData.length <1 || !carData

  return (
    <main className="overflow-hidden">
      <Hero/>
      <div className='grid grid-cols-2 gap-5 m-3'>
        <div>
          <SearchBar/>
        </div>
        <div>
          <OptionsBar/>
        </div>
      </div>
      <div>
        {
          dataAvailable ? (
            <div>
              <p> Oops, no results </p>
              <p> {carData} </p>
            </div>
          ): (
            <section className='flex md:flex-col-3 flex-wrap m-4 p-2'>
            { carData.map((car, index)  => (
                  <CarOverviewCard car={car} index={index}/>
               ))
            }
            </section>
          )

        
         }

      </div>
    </main>
  )
}
