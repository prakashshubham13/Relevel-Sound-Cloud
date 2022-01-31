import React from 'react'
import Search from '../Search';
import style from './style.module.css';

const Header = () => {
  return (
    <div className={style.header}>
    <div className={style.headercontent}>
    <h3>Relevel Sound Cloud</h3>
    <Search />
    </div>
    </div>
  )
}

export default Header;
