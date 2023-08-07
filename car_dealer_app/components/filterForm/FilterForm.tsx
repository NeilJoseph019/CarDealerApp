"use client"

import React, {useState} from 'react'
import { useRouter } from 'next/navigation'
import SearchBar from '../searchBar/SearchBar'

const FilterForm = () => {

    const [selectedManufacturer, setSelectedManufacturer] = useState('')
    const [selectedModel, setSelectedModel] = useState('')

    const router = useRouter()


    const handleSubmit = (event : React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault()

        if (selectedManufacturer === '' && selectedModel === '' ){
            return alert('Please fill in the search bar !')
        }

        const searchParams = new URLSearchParams(window.location.search) // This is to get the URL in the URL-bar
        
        if(selectedManufacturer){  // To update or delete the 'manufacturer' search parameter based on the 'manufacturer' value
            searchParams.set('manufacturer', selectedManufacturer.toLowerCase())
        }else{
            searchParams.delete('manufacturer')
        }

        if(selectedModel){  // To update or delete the 'model' search parameter based on the 'model' value
            searchParams.set('model', selectedModel.toLowerCase())
        }else{
            searchParams.delete('model')
        }

        // Generating the new pathname with the updated search parameters
        const newParams = `${window.location.pathname}?${searchParams.toString()}`

        router.push(newParams)

    }

  return (
    <form onSubmit={handleSubmit}>
        <div>
        
            <SearchBar 
            selectedManufacturer={selectedManufacturer} 
            setSelectedManufacturer={setSelectedManufacturer} 
            selectedModel={selectedModel}
            setSelectedModel={setSelectedModel}
            />
         
        </div>
        <div className='m-4 w-[7rem]'>
            <button type='submit' className='px-3 py-2 rounded-[1.5rem] border-2 border-stone-600 hover:bg-slate-200 shadow-lg'>
                Search
            </button>
        </div>
    </form>
  )
}

export default FilterForm