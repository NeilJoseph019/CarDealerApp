import { carProps } from '@/types'
import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

interface carDetailCardProps {
  car : carProps;
  open : boolean;
  setModalClose : ()=> void;
}

const CarDetailsCard = ({car, open, setModalClose } : carDetailCardProps) => {
  return (
    <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setModalClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" relative w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    More car information :
                  </Dialog.Title>

                  <div className='flex-1 flex flex-col gap-2 mt-3'>
                    <h2 className='font-semibold text-xl capitalize'>
                      {car.make} {car.model}
                    </h2>

                    <div className='mt-3 flex flex-wrap gap-4'>
                      {
                        Object.entries(car).map(([key, value]) => (
                          <div className='flex justify-between gap-5 w-full text-right' key={key} >
                            <h4 className='text-grey capitalize'>
                              {key.split("_").join(" ")}
                            </h4>
                            <p className='text-black-100 font-semibold'>
                              {value}
                            </p>
                          </div>
                        ))
                      }
                    </div>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={setModalClose}
                    >
                      Got it, thanks!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
  )
}

export default CarDetailsCard