import React from 'react'
import { arrayOfLearningPath } from '../utils/constant'
import LearningCard from './LearningCard'

const LearningPathMessage = () => {
  return (
    <div className='w-[80%] lg:w-[60%] mx-auto my-24'>
        <div className='text-center'>
            <h1 className='font-bold  text-3xl  lg:text-4xl'>
                Learning paths based on your answers
            </h1>
            <p className='text-gray-600 my-4'>
                Choose to get started .You can switch anytime .
            </p>
        </div>
       
        <div className=' mx-auto mt-12 grid md:grid-cols-2 gap-4'>
            {
                arrayOfLearningPath.map((card) =>(
                  
                <LearningCard key ={card.id} card={card} />))
            }
        </div>
    </div>
  )
}

export default LearningPathMessage