/* файл index.js в папке header называется компонентом-контейнером.
К нему будем подключен redux. И в этот компонент будут подключены другие компоненты по-меньше, и он будет передовать в них параметры, которые нужно подключить к странице. */

import React from 'react';
import { connect } from 'react-redux';
import { addImageAction } from './actions';

const Gallery = ({ photos, addImage }) => {
  
  const list = photos.map(({ id, name }) => <li key={id}>{name}</li>);

  const addImageForButton = () => {
    const id = photos[photos.length - 1]['id'] + 1;
    const image = {id, name: `image-${id}`};
    addImage(image);
    
  }
  return (
    <div id='gallery' className='page'>
      <div className = 'page-wrap'>
        <h1>Gallery</h1>
        <ul>{ list }</ul>
        <button type='button' onClick = {addImageForButton}>add image</button>
      </div>
    </div> 
  )
}

const mapStateToProps = ({ gallery: { photos } }) => ({ photos: photos });

/* const mapDispatchToProps = (dispatch) => ({ 
  addImage: (image) => dispatch(addImageAction(image))
}); */
const mapDispatchToProps = { 
  addImage: addImageAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
