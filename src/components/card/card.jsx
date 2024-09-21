// components/Card.jsx
'use client'
import React from 'react';
import style from './card.module.css'

const Card = ({ imgURL, caption }) => {
  return (
    <div className={style.card_border}>
      <h2 >{caption}</h2>
      <img  src={imgURL} alt={caption} />
    </div>
  );
};

export default Card;
