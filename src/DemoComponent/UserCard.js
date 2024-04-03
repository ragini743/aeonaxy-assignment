import React from 'react'

const UserCard = ({data}) => {
  return (
    <div className='border-gray-200 border-[1px] py-4 mb-4 rounded-lg pl-4'>
      <div>
        {data.profession?data.profession:data.description}
      </div>
    </div>
  )
}

export default UserCard