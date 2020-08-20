import React from 'react'

export default function Row() {
  return (
    <div className="rounded-large p-5 mb-5 flex bg-white items-center
      justify-between shadow-xs text-sm px-10 font-sans">
      <div className="flex w-40 justify-between">
        <img src="/01.jpg" className="w-12 h-12 mr-5" alt="avatar"/>

        <div className="flex flex-col">
          <p className="font-bold">Steven Cross</p>
          <p className="font-thin">Lima, Perú</p>
        </div>
      </div>

      <div className="flex flex- rounded-full bg-green-100 py-2 px-4 items-center">
        <div className="rounded-full w-4 h-4 bg-green-800 mr-3"></div>
        <p className="font-thin">Active</p>
      </div>

      <div className="flex flex-col">
        <p className="font-thin">Last update</p>
        <p className="font-bold">8:45PM</p>
      </div>

      <div className="flex w-20 justify-between">
        <img src="/star.svg" className="w-5 h-5 cursor-pointer" alt="star"/>
        <img src="/chevron.svg" className="w-5 h-5 cursor-pointer" alt="chevron"/>
      </div>

    </div>
  )
}