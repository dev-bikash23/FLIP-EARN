import React from 'react'

const Title = ({title, descripation}) => {
  return (
    <div className='flex flex-col items-center mb-8'>
        <h3 className='text-2x1 font-bold text-gray-800'> {title}</h3>
        <p className='text-slate-600 max-w-[500px]'> {descripation}</p>

    </div>
  )
}

export default Title