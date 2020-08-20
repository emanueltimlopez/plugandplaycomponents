import React from 'react'

export default function Button() {
  return (
    <div className="w-full p-20 bg-gray-100 font-mono">
      <h1 className="text-4xl">Enjoy the good</h1>
      <h6 className="text-lg text-gray-800">and not only the good</h6>
      <button className="rounded-full bg-orange-500 cursor-pointer mt-6 px-5
        py-2 text-white text-sm hover:bg-orange-800 flex">
        <img className="w-5 mr-2" src="/corazon.svg"/> <span>OK, if you say so</span>
      </button>
    </div>
  )
}