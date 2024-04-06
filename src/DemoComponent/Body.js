import React, { useState } from 'react'
import UserData from './UserData'
import { arrayOfInterestedLearning, arrayOfProession } from '../utils/constant'
import RightPlacePage from './RightPlacePage'
import MathComfortLevelPage from './MathComfortLevelPage'

const Body = ({handleContinue,isContinue,handlePageChange,currentPage}) => {
  const [selectedOption,setSelectedOption] =useState(null) ;
  const handleSelectOption = (option) => {
      setSelectedOption(option);
      console.log("option",option)
    };


    
  return (
    <div>
       {
        currentPage ===1 && <UserData heading={"Which describes you best ?"} text={"This will help us personalize your experience ."} dataArray= {arrayOfProession} handleSelectOption={handleSelectOption} selectedOption ={selectedOption} />
       }
          {
        currentPage ===2 && <UserData heading={"Which are you most interested in ?"} text={" Choose just one .This will help us get you started (but won't limit your experience)."} dataArray = {arrayOfInterestedLearning} handleSelectOption={handleSelectOption} selectedOption ={selectedOption}  />
       }
       {
        currentPage===3&& <RightPlacePage />
       }
       {
        currentPage===4 &&<MathComfortLevelPage />
        }
        


        <div className='justify-center flex'>
           <button className={' text-white px-6 rounded-md py-2 ' + (isContinue?"bg-black":"bg-gray-400")} onClick={handleContinue}>Continue</button>
        </div>
    </div>
  )
}

export default Body