import React from 'react'

const LearningCard = ({card}) => {
  
    const {type,text,imagePath} =card
  return (
    <div className='relative flex flex-col' >
        {card.label && <div className='absolute flex justify-center left-0 right-0 '>
            <button className='bg-orange-400 px-2 rounded-xl '>
                {card.label}
            </button>
            </div> }
            <div className=' flex border-[1px] mt-4 border-gray-200
             px-6 py-12 '>
            <div className='w-[70%] mr-4 text-gray-800 '>
            <span className='font-bold '>{type}
            </span>
            <p className=' '>{text}</p>
        </div>
        <div className='w-[30%]'>
            <img src={imagePath} alt='' className='h-full w-full object-cover'></img>
        </div>
            </div>
       

    </div>
  )
}

export default LearningCard