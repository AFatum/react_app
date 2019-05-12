/* файл index.js в папке header называется компонентом-контейнером.
К нему будем подключен redux. И в этот компонент будут подключены другие компоненты по-меньше, и он будет передовать в них параметры, которые нужно подключить к странице. */

import React from 'react';
import {NavLink} from 'react-router-dom';
import './style.scss';

const Header = () => {
  return (
    <header>
      <ul className='container'>
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to="/gallery">Gallery</NavLink></li>
        <li><NavLink to="/photo">Photo</NavLink></li>
      </ul>
    </header> 
  )
}

export default Header;
