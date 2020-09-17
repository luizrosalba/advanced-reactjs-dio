import React, { useState } from 'react'
import {Button, Calc, PhotosGallery} from './Component' /// assim fica mais organizado 


function App () {

  const photos = [
    'http://placeimg.com/140/60/people',
    'http://placeimg.com/140/60/animals',
    'http://placeimg.com/140/60/tech',
    'http://placeimg.com/140/60/any',
    'http://placeimg.com/140/60/nature',
  ]

  return (
    <>
     <h1>Galeria de fotos</h1>
     <PhotosGallery
        photos={photos}
     />
    </>
  )
}

export default App