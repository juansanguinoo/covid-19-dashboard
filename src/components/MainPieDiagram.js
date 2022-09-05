import React from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend, LinearScale, CategoryScale);

const MainPieDiagram = ({ values }) => {
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

  const arrKeys = Object.keys(values).map((key) => {
    return [key, values[key]];
  });

  const data = {
    labels: arrKeys.map((item) => item[0]),
    datasets: [
      {
        label: '# of Votes',
        data: arrKeys.map((item) => item[1]),
        backgroundColor: ['#31FBFB', '#129BFF', '#4120E6'],
        borderColor: ['#31FBFB', '#129BFF', '#4120E6'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="main__pie">
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default MainPieDiagram;
