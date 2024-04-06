import React from 'react'

const LearningCard = ({card}) => {
    console.log("card",card);
    const {type,text,imagePath} =card
  return (
    <div className='flex border-[1px] border-gray-200 p-2'>
        <div className='w-[50%]'>
            <span>{type}
            </span>
            <p>{text}</p>
        </div>
        <div className='w-[50%]'>
            <img src={imagePath} alt=''></img>
        </div>

    </div>
  )
}

export default LearningCard