import React, { useState } from 'react'
import { arrayOfProession } from '../utils/constant'
import UserCard from './UserCard'

const UserData = ({heading,text ,dataArray}) => {
    const [selectedOption,setSelectedOption] =useState(null) ;
    const handleSelectOption = (option) => {
        setSelectedOption(option);
        console.log("option",option)
      };
      console.log("selectedOption",selectedOption)
    
  return (
    <div>
        <div className='text-center'>
          <h1 className='font-bold text-4xl'>
             {heading}
          </h1>
          <p className='text-gray-600 my-4'>{text}</p>
        </div>
        <div className='w-[90%] sm:w-[80%] lg:w-[40%] mx-auto mt-12 '>
            {
                dataArray.map((data) => 
                  <UserCard 
                  key={data.id} data= {data}
                  handleSelectOption={handleSelectOption} 
                  isSelected = { selectedOption && selectedOption.id === data.id}
                   />
                )
            }
        </div>
    </div>
  )
}

export default UserData