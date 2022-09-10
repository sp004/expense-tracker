import React from 'react'

export default function Button(props) {
  

  return (
    <div className="flex flex-col items-center my-3 px-2">
        <input 
        className='rounded-lg py-2 w-full text-white bg-black outline-0 cursor-pointer hover:bg-white hover:text-black font-medium'
        type={props.type} 
        value={props.value} />
    </div>
  )
}
