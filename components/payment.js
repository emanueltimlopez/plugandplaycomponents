import React from 'react'

export default function PaymentInfo() {
  return (
    <div className="container relative mx-20 mb-5 p-4 w-64
      rounded-lg flex flex-col border text-sm bg-white">
      <h3 className="font-semibold text-base mb-6">Información de pago</h3>
      <div className="flex justify-between py-2 border-b border-gray-200">
        <div>Producto Uno <span className="text-xs text-gray-600">x3</span></div>
        <div>1500 <span className="text-xs">ARS</span></div>
      </div>
      <div className="flex justify-between py-2 border-b border-gray-200">
        <div>Producto Dos <span className="text-xs text-gray-600">x1</span></div>
        <div>500 <span className="text-xs">ARS</span></div>
      </div>
      <div className="flex justify-between py-2 border-b border-gray-200">
        <div>Envio</div>
        <div>500 <span className="text-xs">ARS</span></div>
      </div>
      <div className="flex justify-between py-2 border-b border-gray-200">
        <div>Descuento</div>
        <div className="text-green-500">-500 <span className="text-xs">ARS</span></div>
      </div>
      <div className="flex justify-between py-4 text-base">
        <div className="font-semibold">Total</div>
        <div className="">2000 <span className="text-xs">ARS</span></div>
      </div>
      <div className="flex bg-gray-300 px-4 mt-4 rounded-lg justify-between">
        <img src="./card.svg" className="w-1/3"/>
        <div className="text-gray-800 p-4">
          <p className="text-xs">Banco Red</p>
          <p className="text-sm">**** **** 3456</p>
        </div>
      </div>
    </div>
  )
}