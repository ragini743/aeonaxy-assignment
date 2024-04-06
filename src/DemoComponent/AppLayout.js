import React, { useState } from 'react'
import HorizontalLoader from './HorizontalLoader';
import Body from './Body';

const AppLayout = () => {
    // const [loaderProgress,setLoaderProgress] = useState(10) ;
    const [currentPage, setCurrentPage] = useState(1);
    const loaderProgress = currentPage === 1 ? 10 :
    currentPage === 2 ? 20 :
    currentPage === 3 ? 30 :
    currentPage === 4 ? 40 : // Assuming 100% progress for page 4
    0;
    const [isContinue,setIsContinue] =useState(false)
    const handleContinue =() =>{
        setIsContinue(true)
        // setLoaderProgress(loaderProgress+10)
        handlePageChange(currentPage+1)
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
            <Body handleContinue={handleContinue} isContinue={isContinue} currentPage ={currentPage} 
            handlePageChange={handlePageChange} />
        </div>
        
    </div>
  )
}

export default AppLayout