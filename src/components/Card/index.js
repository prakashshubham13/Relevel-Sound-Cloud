import React from 'react'
import style from './style.module.css';

const  Card = ({img, title, detail, duration, rating}) => {
  return (
    <div className={style.card__outer}>
    <div className={style.line}></div>
    <div className={style.card__inner}>
    <div className={style.img}>
    <img src={img} alt='img'/>
    </div>
    <div className={style.text}>
    <h1>{title}</h1>
    <h2>{detail}</h2>
    </div>
    <div className={style.detail}>
    <h1>{duration}</h1>
    <h1>{rating}</h1>
    </div>
    </div>
    </div>
  )
}

export default Card;
