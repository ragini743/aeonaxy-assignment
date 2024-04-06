import React from 'react'

const MathEquation = ({equ}) => {
    console.log("qe",equ)
    const {equation,type,level} = equ
  return (
    <div className='px-2 py-4 border-[1px] border-gray-400
     flex-1 flex flex-col justify-center items-center rounded-md '>
        <code className='text-gray-700 mb-4 mt-8  text-xl'  dangerouslySetInnerHTML={{ __html: equation }}>
      
        </code>
        <div className='text-[0.70rem] text-gray-400 lg:text-sm'>
        <p className='text-black'>
            {type}
        </p>
        <p className='font-bold'>
            {level}
        </p>
        </div>
      

    </div>
  )
}

export default MathEquation