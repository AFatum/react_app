/* файл index.js в папке header называется компонентом-контейнером.
К нему будем подключен redux. И в этот компонент будут подключены другие компоненты по-меньше, и он будет передовать в них параметры, которые нужно подключить к странице. */

import React from 'react';
import './style.scss';

const Sidebar = () => {
  return (
    <div id='sidebar'>
      <div className='sidebar-wrap'>
        <h1>Sidebar</h1>
      </div>
    </div> 
  )
}

export default Sidebar;