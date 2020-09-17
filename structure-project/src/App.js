import React, { useState } from 'react'
import { Button, PhotosGallery } from './components' ///assim posso importar todos meus componentes de forma organizada 
import { sanitizeString } from './commons/utils/string'

function App () {

  const photos = [
    'http://placeimg.com/140/60/people',
    'http://placeimg.com/140/60/animals',
    'http://placeimg.com/140/60/tech',
    'http://placeimg.com/140/60/any',
    'http://placeimg.com/140/60/nature',
  ]

  sanitizeString('teste') /// importei utils e posso utilizar um utilitario para tatar uma string por exemplo 

  return (
    <>
     <h1>Galeria de fotos</h1>
     <PhotosGallery
        photos={photos}
     />
     <Button>
     </Button>
    </>
  )
}

export default App