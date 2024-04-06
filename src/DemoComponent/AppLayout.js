import React, { useState } from 'react'
import HorizontalLoader from './HorizontalLoader';
import Body from './Body';
import Skelton from './Skelton';

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
    currentPage === 4 ? 40 :
    currentPage === 5 ? 100 :  // Assuming 100% progress for page 5
    110;
 
    console.log("currentPage==3",currentPage===3)
    const handleContinue =() =>{
        if(currentPage===2||currentPage===4) {setIsContinue(true)}

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
          {loaderProgress<=100 ?<div>
            <header>
      
      <HorizontalLoader loaderProgress={loaderProgress} />
    </header>
    <div>
        <Body handleContinue={handleContinue} isContinue={isContinue} setIsContinue={setIsContinue} currentPage ={currentPage} 
        handlePageChange={handlePageChange} selectedOption={selectedOption} handleSelectOption={handleSelectOption}  />
    </div>
            </div>:  <Skelton />}
       
        
    </div>
  )
}

export default AppLayout