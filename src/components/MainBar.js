import React, { useEffect } from 'react';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Legend,
  Tooltip,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import useCovidDataWorld from '../hooks/useCovidDataWorld';
import { useDispatch } from 'react-redux';
import {
  actionCardsConfirmate2021,
  actionCardsConfirmate2022,
  actionCardsDeaths2021,
  actionCardsDeaths2022,
  actionCardsRecover2021,
  actionCardsRecover2022,
} from '../store/actions/actionCards';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MainBar = ({ dates, value, year }) => {
  const { isLoading, confirmatedCases, recoveredCases, deathCases } =
    useCovidDataWorld(value, dates);

  const dispatch = useDispatch();

  const data = {
    labels: confirmatedCases.monthName,
    datasets: [
      {
        label: `Confirmated Cases ${year}`,
        data: confirmatedCases.outputData,
        borderColor: ['#31FBFB'],
        backgroundColor: ['#31FBFB'],
        borderWidth: 1,
      },
      {
        label: `Recovered Cases ${year}`,
        data: recoveredCases.outputData,
        borderColor: ['#129BFF'],
        backgroundColor: ['#129BFF'],
        borderWidth: 1,
      },
      {
        label: `Death Cases ${year}`,
        data: deathCases.outputData,
        borderColor: ['#4120E6'],
        backgroundColor: ['#4120E6'],
        borderWidth: 1,
      },
    ],
  };

  useEffect(() => {
    if (year === '2021') {
      dispatch(actionCardsConfirmate2021(confirmatedCases.lastestData));
      dispatch(actionCardsRecover2021(recoveredCases.lastestData));
      dispatch(actionCardsDeaths2021(deathCases.lastestData));
    }
    if (year === '2022') {
      dispatch(actionCardsConfirmate2022(confirmatedCases.lastestData));
      dispatch(actionCardsRecover2022(recoveredCases.lastestData));
      dispatch(actionCardsDeaths2022(deathCases.lastestData));
    }
  }, [dispatch, confirmatedCases, recoveredCases, deathCases, year]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    // scales: {},
    legend: {
      labels: {
        fontSize: 20,
      },
    },
  };

  return (
    <div className="main__bar">
      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
        <Bar data={data} options={options} />
      )}
    </div>
  );
};

export default MainBar;
