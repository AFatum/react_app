/* файл index.js в папке header называется компонентом-контейнером.
К нему будем подключен redux. И в этот компонент будут подключены другие компоненты по-меньше, и он будет передовать в них параметры, которые нужно подключить к странице. */

import React from 'react';

const Photo = () => {
  return (
    <div id='photo' className='page'>
      <div className='page-wrap'>
        <h1>Photo</h1>
      </div>
    </div>
  )
}

export default Photo;