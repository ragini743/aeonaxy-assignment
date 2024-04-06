import React from 'react'
import { arrayOfLearningPath } from '../utils/constant'
import LearningCard from './LearningCard'

const LearningPathMessage = () => {
  return (
    <div className='w-[80%] lg:w-[60%] mx-auto my-24'>
        <div>
            <h1 className='font-bold text-3xl  lg:text-4xl'>
                Learning paths based on your answers
            </h1>
            <p className='text-gray-600 my-4'>
                Choose to get started .You can switch anytime .
            </p>
        </div>
        <div>
            <button className='bg-orange-400 text-xs '>MOST POPULAR</button>
        </div>
        <div>
            {
                arrayOfLearningPath.map((card) =>(<LearningCard card={card}/>))
            }
        </div>
    </div>
  )
}

export default LearningPathMessage