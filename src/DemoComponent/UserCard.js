import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;



const UserCard = ({data,isSelected,handleSelectOption}) => {
    console.log("isSelected",isSelected)
  return (
    <div className={'border-gray-200 border-[1px] py-2 mb-4 rounded-lg pl-4 flex items-center ' + (isSelected? "shadow-custom border-red-200" :"")} onClick={() => handleSelectOption(data)}>
        <div className='w-[10%] sm:w-[5%] mr-4 '>
           <img src={data.icon} alt=''></img>
        </div>
        
      <div className='w-[90%]'>
        <label className='font-bold list-none w-full inline-block'>
           
                  {data.profession?data.profession:data.description}
                  <span className='text-gray-700 font-normal'>{data.optionalProfession}</span>
        </label>
       
      </div>
    </div>
  )
}

export default UserCard