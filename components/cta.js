import React from 'react'

export default function CTA() {
  return (
    <div className="container relative bg-white mt-20 mb-5 mx-20 p-4 w-40 h-48
      rounded-large shadow-lg flex flex-col items-center">

      <img src="/2247295.png" className="w-24 absolute -m-6" alt="person sitting using computer"/>

      <div className="font-sans text-gray-800 text-center mt-8">
        <p className="font-semibold text-xl">
          Invite Friends
        </p>
        <p className="font-light text-xs text-gray-600">
          Enjoy the product<br/> for free
        </p>
        <button className="rounded-large bg-red-500 cursor-pointer mt-4 px-5
          py-2 text-white text-sm hover:bg-red-800">
            Join
        </button>
      </div>
    </div>
  )
}