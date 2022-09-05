import { useEffect, useState } from 'react';
import axios from 'axios';

const useCovidDataWorld = (countryEndPoint, dates) => {
  const [isLoading, setIsLoading] = useState(true);
  const [dataInfo, setDataInfo] = useState([]);
  const [confirmatedCases, setConfirmatedCases] = useState([]);
  const [recoveredCases, setRecoveredCases] = useState([]);
  const [deathCases, setDeathCases] = useState([]);

  const getCountryData = async (enpoint) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.covid19api.com/${enpoint}?${dates}`
      );
      setDataInfo(response.data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  const getWorldDataByMonth = (valueInfo, data) => {
    // get the data by month
    const monthInfo = data.reduce((acc, item) => {
      const month = item.Date.slice(5, 7);
      if (!acc[month]) {
        acc[month] = 0;
      }
      if (acc[month] < item[valueInfo]) {
        acc[month] = item[valueInfo];
      }
      return acc;
    }, {});

    const arrKeys = Object.keys(monthInfo).map((key) => {
      return [Number(key), monthInfo[key]];
    });

    // sort the data by month
    arrKeys.sort((first, second) => {
      return first[0] - second[0];
    });

    // convert number to date
    const monthName = arrKeys.map((item) => {
      const date = new Date(2021, item[0] - 1, 1);
      return date.toLocaleString('default', { month: 'long' });
    });

    // convert the data to the format that chart.js needs
    const outputData = arrKeys.map((item) => item[1]);

    // value higher
    const lastestData = outputData.reduce((acc, item) => {
      if (acc < item) {
        acc = item;
      }
      return acc;
    }, 0);

    return { monthName, outputData, lastestData };
  };

  useEffect(() => {
    if (countryEndPoint) {
      getCountryData(countryEndPoint);
    }
  }, [countryEndPoint]);

  useEffect(() => {
    if (!isLoading && countryEndPoint === 'world') {
      setConfirmatedCases(getWorldDataByMonth('TotalConfirmed', dataInfo));
      setRecoveredCases(getWorldDataByMonth('TotalRecovered', dataInfo));
      setDeathCases(getWorldDataByMonth('TotalDeaths', dataInfo));
    } else if (!isLoading && countryEndPoint !== 'world') {
      setConfirmatedCases(getWorldDataByMonth('Confirmed', dataInfo));
      setRecoveredCases(getWorldDataByMonth('Recovered', dataInfo));
      setDeathCases(getWorldDataByMonth('Deaths', dataInfo));
    }

    return () => {
      setConfirmatedCases([]);
      setRecoveredCases([]);
      setDeathCases([]);
    };
  }, [isLoading, dataInfo, countryEndPoint]);

  return {
    isLoading,
    confirmatedCases,
    recoveredCases,
    deathCases,
  };
};

export default useCovidDataWorld;
