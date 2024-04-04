import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;



const UserCard = ({data}) => {
  return (
    <div className='border-gray-200 border-[1px] py-4 mb-4 rounded-lg pl-4'>
        <div className='w-6'>
           <img src={data.icon} alt=''></img>
        </div>
        
      <div>
        <label className='font-bold list-none'>
            <input type='radio' value={data.profession?data.profession:data.description}>
      
            </input>
                  {data.profession?data.profession:data.description}
                  <span className='text-gray-700 font-light'>{data.optionalProfession}</span>
        </label>
       
      </div>
    </div>
  )
}

export default UserCard