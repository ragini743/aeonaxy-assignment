import React, { useState } from 'react'
import HorizontalLoader from './HorizontalLoader';
import Body from './Body';

const AppLayout = () => {

    const [selectedOption,setSelectedOption] =useState(null) ;
    const [isContinue,setIsContinue] =useState(false)
  const handleSelectOption = (option) => {
      setSelectedOption(option);
   
      setIsContinue(!isContinue)
    };
    const [currentPage, setCurrentPage] = useState(1);
    const loaderProgress = currentPage === 1 ? 10 :
    currentPage === 2 ? 20 :
    currentPage === 3 ? 30 :
    currentPage === 4 ? 40 : // Assuming 100% progress for page 4
    0;
 
    console.log("currentPage==3",currentPage===3)
    const handleContinue =() =>{
        if(currentPage===2) {setIsContinue(true)}

      else{
        setIsContinue(!isContinue);

        setSelectedOption(!selectedOption) ;
      }
      
        handlePageChange(currentPage+1);
       
    }
    const handlePageChange = (page) => {
        setCurrentPage(page);
      };
  return (
    <div>
        <header>
          <HorizontalLoader loaderProgress={loaderProgress} />
        </header>
        <div>
            <Body handleContinue={handleContinue} isContinue={isContinue} setIsContinue={setIsContinue} currentPage ={currentPage} 
            handlePageChange={handlePageChange} selectedOption={selectedOption} handleSelectOption={handleSelectOption}  />
        </div>
        
    </div>
  )
}

export default AppLayout