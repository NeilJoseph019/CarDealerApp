"use client"

import React, {useState} from 'react'
import SearchBar from '../searchBar/SearchBar'

const FilterForm = () => {

    const [selectedManufacturer, setSelectedManufacturer] = useState('')
    const [selectedModel, setSelectedModel] = useState('')

  return (
    <>
    <div className='flex flex-col sm:flex-wrap gap-5 m-3 '>
        <div>
          <SearchBar 
          selectedManufacturer={selectedManufacturer} 
          setSelectedManufacturer={setSelectedManufacturer} 
          selectedModel={selectedModel}
          setSelectedModel={setSelectedModel}
          />
        </div>
    </div>
    </>
  )
}

export default FilterForm