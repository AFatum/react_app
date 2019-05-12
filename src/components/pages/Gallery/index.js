/* файл index.js в папке header называется компонентом-контейнером.
К нему будем подключен redux. И в этот компонент будут подключены другие компоненты по-меньше, и он будет передовать в них параметры, которые нужно подключить к странице. */

import React from 'react';

const Gallery = () => {
  return (
    <div id='gallery' className='page'>
      <div className = 'page-wrap'>
        <h1>Gallery</h1>
      </div>
    </div> 
  )
}

export default Gallery;