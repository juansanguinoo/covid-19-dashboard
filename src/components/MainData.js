import React from 'react';
import MainBar from './MainBar';
import MainCards from './MainCards';
import MainInput from './MainInput';

const MainData = ({ actionInput, value, year, dates }) => {

  return (
    <>
      <MainInput actionInput={actionInput} year={year} />
      <div className="main__cards__container">
        <MainCards
          image={'virus-covid'}
          title={'Confirmated'}
          styleIcon={'main__cards--color-blue'}
          value={`confirmatedCases${year}`}
        />
        <MainCards
          image={'heart-pulse'}
          title={'Recovered'}
          styleIcon={'main__cards--color-red'}
          value={`recoveredCases${year}`}
        />
        <MainCards
          image={'skull'}
          title={'Deaths'}
          styleIcon={'main__cards--color-white'}
          value={`deathCases${year}`}
        />
      </div>
      <div className="main__mainBar__container">
      <h2>{`bar chart ${year}`}</h2>
        <MainBar dates={dates} value={value} year={year} />
      </div>
    </>
  );
};

export default MainData;
