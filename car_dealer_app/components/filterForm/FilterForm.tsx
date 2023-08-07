"use client"

import React, {useState} from 'react'
import SearchBar from '../searchBar/SearchBar'

const FilterForm = () => {

    const [selectedManufacturer, setSelectedManufacturer] = useState('')
    const [selectedModel, setSelectedModel] = useState('')


    const handleSubmit = (event : any)=>{
        event.preventDefault()

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