import React from 'react'
import { arrayOfProession } from '../utils/constant'
import UserCard from './UserCard'

const UserData = ({heading,text ,dataArray}) => {
  return (
    <div>
        <div className='text-center'>
          <h1 className='font-bold text-4xl'>
             {heading}
          </h1>
          <p className='text-gray-600 my-4'>{text}</p>
        </div>
        <div className='lg:w-[40%] mx-auto mt-12 '>
            {
                dataArray.map((data) => 
                  <UserCard data= {data} />
                )
            }
        </div>
    </div>
  )
}

export default UserData