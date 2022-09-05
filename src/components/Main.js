import React, { useState } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import MainDiagrams from './MainDiagrams';
import { actionInputLeft } from '../store/actions/actionInput';
import { actionInputRight } from '../store/actions/actionInput';
import MainData from './MainData';
import MainPieDiagram from './MainPieDiagram';

const Main = () => {
  const [filter, setFilter] = useState('');
  const { valueLeft, valueRight } = useSelector((state) => state.inputReducer);
  const cardValues = useSelector((state) => state.cardsReducer);
  const tableData = useSelector((state) => state.cardsReducer.actualData);

  const search = tableData.filter((country) =>
    country.country.toLowerCase().includes(filter.toLowerCase())
  );

  const leftValues = {
    confirmatedCases2021: cardValues.confirmatedCases2021,
    recoveredCases2021: cardValues.recoveredCases2021,
    deathsCases2021: cardValues.deathCases2021,
  };

  const rightValues = {
    confirmatedCases2022: cardValues.confirmatedCases2022,
    recoveredCases2022: cardValues.recoveredCases2022,
    deathsCases2022: cardValues.deathCases2022,
  };

  return (
    <main className="main">
      <div className="main__left__container">
        <MainData
          actionInput={actionInputLeft}
          value={valueLeft}
          year={'2021'}
          dates={'from=2021-01-01T00:00:00.000Z&to=2021-12-31T23:59:59.000Z'}
        />
        <div className="main__mainPieDiagram__container">
          <h2>Doughnut Chart 2021</h2>
          <MainPieDiagram values={leftValues} />
        </div>
      </div>
      <div className="main__center__container">
        <h2>current information</h2>  
        <div className="main__center__worldmap__container">
          <MainDiagrams />
        </div>
        <div className="main__center__table__container">
          <div className="content-filter">
            <input
              type="text"
              placeholder="Country"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            />
          </div>
          <table className="content-table">
            <thead>
              <tr>
                <th>Country</th>
                <th>Confirmed</th>
                <th>Recovered</th>
                <th>Deaths</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {search.map((item) => {
                return (
                  <tr key={item.country}>
                    <td>{item.country}</td>
                    <td>{item.confirmed}</td>
                    <td>{item.recovered}</td>
                    <td>{item.deaths}</td>
                    <td>{moment(item.date).format('MMM Do YY')}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="main__right__container">
        <MainData
          actionInput={actionInputRight}
          value={valueRight}
          year={'2022'}
          dates={'from=2022-01-01T00:00:00Z&to=2022-09-04T00:00:00Z'}
        />
        <div className="main__mainPieDiagram__container">
        <h2>Doughnut Chart 2022</h2>
          <MainPieDiagram values={rightValues} />
        </div>
      </div>
    </main>
  );
};

export default Main;
