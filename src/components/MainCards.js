import React from 'react';
import { useSelector } from 'react-redux';

const MainCards = ({ image, title, styleIcon, value }) => {

  const cardValues = useSelector((state) => state.cardsReducer[value]);

  const formatFuntion = (cardValues) => {
    if (!cardValues && cardValues !== 0) {
      return 'Loading...';
    }
    const formatNumber = new Intl.NumberFormat('en-US');
    return formatNumber.format(cardValues);
  }

  return (
    <div className={`main__cards ${styleIcon}`}>
      <div className="main__cards--item">
        <i className={`fa-solid fa-${image}`}></i>
      </div>
      <div className="main__cards--content">
        <h2>{title}</h2>
        <p>{formatFuntion(cardValues)}</p>
      </div>
    </div>
  );
};

export default MainCards;
