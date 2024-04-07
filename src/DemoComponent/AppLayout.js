import React, { useEffect, useState } from "react";
import HorizontalLoader from "./HorizontalLoader";
import Body from "./Body";
import Skelton from "./Skelton";
import LearningPathMessage from "./LearningPathMessage";

const AppLayout = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isContinue, setIsContinue] = useState(false);
  const [isSkelton, setIsSkelton] = useState(true);
  const handleSelectOption = (option) => {
    setSelectedOption(option);

    setIsContinue(true);
  };
  const [currentPage, setCurrentPage] = useState(1);
  const loaderProgress =
    currentPage === 1
      ? 10
      : currentPage === 2
      ? 20
      : currentPage === 3
      ? 30
      : currentPage === 4
      ? 40
      : currentPage === 5
      ? 100 // Assuming 100% progress for page 5
      : 110;

  const handleContinue = () => {
    if (currentPage === 2 || currentPage === 4) {
      setIsContinue(true);
    } else {
      setIsContinue(!isContinue);

      setSelectedOption(!selectedOption);
    }

    handlePageChange(currentPage + 1);
  };
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsSkelton(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);
 
  return (
    <div>
      {loaderProgress <= 100 ? (
        <div>
          <header>
            <HorizontalLoader loaderProgress={loaderProgress} />
          </header>
          <div>
            <Body
              handleContinue={handleContinue}
              isContinue={isContinue}
              setIsContinue={setIsContinue}
              currentPage={currentPage}
              handlePageChange={handlePageChange}
              selectedOption={selectedOption}
              handleSelectOption={handleSelectOption}
            />
          </div>
        </div>
      ) : isSkelton ? (
        <Skelton />
      ) : (
        <LearningPathMessage />
      )}
    </div>
  );
};

export default AppLayout;
