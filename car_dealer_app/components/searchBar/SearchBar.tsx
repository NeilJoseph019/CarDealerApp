"use client"

import React,{Fragment, useState} from 'react'
import { Combobox, Transition } from '@headlessui/react'
import { HiChevronUpDown, HiArrowSmallRight } from "react-icons/hi2"

import { manufacturers } from '@/constants'

interface searchbarProps {
  selectedManufacturer : string;
  setSelectedManufacturer : any;
  selectedModel: string;
  setSelectedModel : any;
}

const SearchBar = ( {selectedManufacturer, setSelectedManufacturer, selectedModel, setSelectedModel} : searchbarProps) => {

  const [query, setQuery] = useState('')

  const filteredManufacturers =
  query === ""
    ? manufacturers
    : manufacturers.filter((item) =>
        item
          .toLowerCase()
          .replace(/\s+/g, "")
          .includes(query.toLowerCase().replace(/\s+/g, ""))
      );

  return (
    <div className='grid md:grid-cols-2 gap-5 m-3 '> 

      <Combobox value={selectedManufacturer} onChange={setSelectedManufacturer}>
        <div className="relative">
          <div className="relative w-full cursor-default overflow-hidden rounded-[1.5rem] border-2 border-teal-600 bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full  py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(item: string) => item}
              onChange={(event) => setQuery(event.target.value)}
              placeholder='Audi...'
            />
            <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <HiChevronUpDown
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </Combobox.Button>
          </div>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <Combobox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {
              filteredManufacturers.length === 0 && query !== '' ? (
                <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                  Nothing found.
                </div>
              ) : (
                filteredManufacturers.map((manufacturer) => (
                  <Combobox.Option
                    key={manufacturer}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-teal-600 text-white' : 'text-gray-900'
                      }`
                    }
                    value={manufacturer}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {manufacturer}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? 'text-white' : 'text-teal-600'
                            }`}
                          >
                            <HiArrowSmallRight className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>

      <div className='w-ful'>
        <input placeholder='A4' className='py-2 pl-3 pr-10 h-[2.5rem] w-full text-sm rounded-[1.5rem] border-2 border-teal-600 shadow-md'
        value={selectedModel}
        onChange={(event) => setSelectedModel(event.target.value)}
        />
      </div>

      
    </div>
  )
}

export default SearchBar