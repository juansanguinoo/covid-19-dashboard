import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

const MainInput = ({ actionInput, year }) => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState('world');

  const dispatch = useDispatch();

  const getCountryData = async () => {
    try {
      const response = await axios.get('https://api.covid19api.com/countries');
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSelect = (e) => {
    e.preventDefault();
    setCountry(e.target.value);
  };

  useEffect(() => {
    getCountryData();
  }, []);

  useEffect(() => {
    if (country === 'world') {
      dispatch(actionInput(country));
    } else {
      dispatch(actionInput(`country/${country}`));
    }
  }, [country, dispatch, actionInput]);

  return (
    <div className="main__input__container">
      <div className="main__input">
        <select name="country" id="country" onChange={handleSelect}>
          <option value="world">World</option>
          {countries
            .sort((a, b) => a.Country.localeCompare(b.Country))
            .map((country) => (
              <option key={country.Slug} value={country.Slug}>
                {country.Country}
              </option>
            ))}
        </select>
      </div>

      <div className="main__input__choose">
        <h2>{`${country} cases ${year}`}</h2>
      </div>
    </div>
  );
};

export default MainInput;
