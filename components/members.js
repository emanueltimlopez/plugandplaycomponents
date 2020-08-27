import React from 'react'

export default function Members() {
  return (
    <div className="bg-gray-100 rounded-lg p-3 w-64 mb-4">
      <div className="flex justify-between items-end mb-4">
        <h1 className="font-semibold">Team</h1>
        <a className="text-xs text-blue-600" href="#">View All</a>
      </div>
      <div className="bg-gray-300 rounded-lg divide-y divide-gray-400 px-2">
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <img src="/01.jpg" className="rounded-lg w-10 h-10 mx-1 mr-2"/>
            <div>
              <p className="text-sm">Julia Robers</p>
              <p className="text-xs text-gray-600 font-thin">Web developer</p>
            </div>
          </div>
          <img src="/mas.svg" className="h-4 opacity-50 cursor-pointer hover:opacity-100"/>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <img src="/04.jpg" className="rounded-lg w-10 h-10 mx-1 mr-2"/>
            <div>
              <p className="text-sm">Matiu Macomery</p>
              <p className="text-xs text-gray-600 font-thin">UX Designer</p>
            </div>
          </div>
          <img src="/mas.svg" className="h-4 opacity-50 cursor-pointer hover:opacity-100"/>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <img src="/02.jpg" className="rounded-lg w-10 h-10 mx-1 mr-2"/>
            <div>
              <p className="text-sm">Jesica Anda</p>
              <p className="text-xs text-gray-600 font-thin">Manager</p>
            </div>
          </div>
          <img src="/mas.svg" className="h-4 opacity-50 cursor-pointer hover:opacity-100"/>
        </div>
        <div className="flex justify-between items-center py-2">
          <div className="flex items-center">
            <img src="/03.jpg" className="rounded-lg w-10 h-10 mx-1 mr-2"/>
            <div>
              <p className="text-sm">Rober Pattinson</p>
              <p className="text-xs text-gray-600 font-thin">DevOps</p>
            </div>
          </div>
          <img src="/mas.svg" className="h-4 opacity-50 cursor-pointer hover:opacity-100"/>
        </div>
      </div>
    </div>
  )
}