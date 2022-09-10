import React from 'react'

export default function Input(props) {
  return (
    <div className="flex flex-col items-center space-y-2 w-full">
        <label className='font-medium'>{props.label}</label>
        <input className='rounded-lg h-10 pl-3 w-full outline-0 text-sm' type={props.type} placeholder={props.placeholder} 
        value={props.enteredData} onChange={(e) => props.onInputChange(e.target.value)} />
    </div>
  )
}
