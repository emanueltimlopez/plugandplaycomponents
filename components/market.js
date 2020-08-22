import React from 'react'

export default function Market() {
  return (
    <div className="rounded-large p-5 mb-5 flex bg-white items-center
      justify-between shadow-xs text-sm px-10 font-sans">
      <div className="grid grid-cols-3 divide-x divide-gray-400">
        <div>
          <p className="font-thin">AAPL</p>
          <p className="font-semibold text-lg">
            497,48
            <span className="text-sm">USD</span>
          </p>
          <p className="text-green-600">5,15%</p>
        </div>
        <div className="pl-3">
          <p className="font-thin">MSFT</p>
          <p className="font-semibold text-lg">
            213,02
            <span className="text-sm">USD</span>
          </p>
          <p className="text-red-600">0,73%</p>
        </div>
        <div className="pl-3">
          <p className="font-thin">TSLA</p>
          <p className="font-semibold text-lg">
            2.049,98
            <span className="text-sm">USD</span>
          </p>
          <p className="text-green-600">2,41%</p>
        </div>
      </div>
    </div>
  )
}