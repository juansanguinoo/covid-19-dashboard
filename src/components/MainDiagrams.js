import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VectorMap } from 'react-jvectormap';
import { useDispatch } from 'react-redux';
import { actionCardsActualData } from '../store/actions/actionCards';

const MainDiagrams = () => {
  const [countriesData, setCountriesData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [countryMapData, setCountryMapData] = useState(true);

  const dispatch = useDispatch();

  const getCountries = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get('https://api.covid19api.com/summary');
      setCountriesData(response.data.Countries);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getCountries();
  }, []);

  useEffect(() => {
    if (!isLoading) {
      // get confirmed cases by country
      setCountryMapData(
        countriesData.reduce((acc, item) => {
          acc[item.CountryCode] = item.TotalConfirmed;
          return acc;
        }, {})
      );

      const actualData = countriesData.map((item) => {
        return {
          country: item.Country,
          confirmed: item.TotalConfirmed,
          recovered: item.TotalRecovered,
          deaths: item.TotalDeaths,
          date: item.Date,
        };
      });
      dispatch(actionCardsActualData(actualData));
    }
  }, [isLoading, countriesData, dispatch]);

  const formatFuntion = (cardValues) => {
    if (!cardValues && cardValues !== 0) {
      return 'There is no data';
    }
    const formatNumber = new Intl.NumberFormat('en-US');
    return formatNumber.format(cardValues);
  };

  return (
    <div className="main__diagrams">
      <VectorMap
        map={'world_mill'}
        backgroundColor="transparent" //change it to ocean blue: #0077be
        zoomOnScroll={false}
        containerStyle={{
          width: '100%',
          height: '100%',
        }}
        containerClassName="map"
        regionStyle={{
          initial: {
            fill: '#e4e4e4',
            'fill-opacity': 0.9,
            stroke: 'none',
            'stroke-width': 0,
            'stroke-opacity': 0,
          },
          hover: {
            'fill-opacity': 0.8,
            cursor: 'pointer',
          },
          selected: {
            fill: '#2938bc', //color for the clicked country
          },
          selectedHover: {},
        }}
        series={{
          regions: [
            {
              values: countryMapData, //this is your data
              scale: ['#E1F5FE', '#129BFF'], //your color game's here
              normalizeFunction: 'polynomial',
            },
          ],
        }}
        onRegionTipShow={(e, el, code) => {
          el.html(el.html() + `: ${formatFuntion(countryMapData[code])}`);
        }}
      />
    </div>
  );
};

export default MainDiagrams;
