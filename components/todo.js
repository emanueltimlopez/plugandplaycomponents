import React from 'react'

export default function TODO() {
  return (
    <div className="container relative bg-white mx-20 mb-5 p-4 px-8 w-auto h-64
      rounded-lg shadow-lg flex flex-col">

      <div className="flex flex-row justify-between pt-2 pb-5 border-b">
        <div className="flex flex-row">
          <img src="/01.jpg" className="rounded-full w-10 h-10 
            m-1 ml-0 border-4 border-blue-500"/>
          <img src="/02.jpg" className="rounded-full w-10 h-10 
            m-1 border-4 border-green-500 -ml-3"/>
          <img src="/03.jpg" className="rounded-full w-10 h-10 
            m-1 border-4 border-red-500 -ml-3"/>
          <img src="/04.jpg" className="rounded-full w-10 h-10 
            m-1 border-4 border-grey-500 -ml-3"/>
        </div>
        <button className="cursor-pointer px-4 text-sm border-2
          border-gray-600 rounded-md text-gray-800 h-10">
            Save
        </button>
      </div>

      <div className="font-sans text-gray-800 text-center mt-5">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <img src="/tick.svg" className="mr-4 w-6 h-6"/>
            <p className="text-gray-800 text-sm">
              Design the cat
            </p>
          </div>
          <img src="/02.jpg" className="w-10 h-10 rounded-full ml-16"/>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <img src="/no-tick.svg" className="mr-4 w-6 h-6"/>
            <p className="text-gray-800 text-sm">
              Feed oreo
            </p>
          </div>
          <img src="/04.jpg" className="w-10 h-10 rounded-full ml-16"/>
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row">
            <img src="/no-tick.svg" className="mr-4 w-6 h-6"/>
            <p className="text-gray-800 text-sm">
              Sing the ice song
            </p>
          </div>
          <img src="/03.jpg" className="w-10 h-10 rounded-full ml-16"/>
        </div>
      </div>
    </div>
  )
}