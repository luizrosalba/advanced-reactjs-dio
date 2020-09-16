import React, { useRef, useEffect, useState } from 'react'
//// hook useRef 


function App() {
  const inputRef = useRef() 
  const count = useRef(1) /// setando um valor padrão por useRef
  const [_, setValue] = useState(false) /// usando o setstate eu poderia mandar a pagina renderizar novamente apos a mudanca de count.current

  const handleClick = () => {
    inputRef.current.focus() /// tudo que for acessar em inputRef está em current de modo que nao causa rerender na app 
    console.log('inputRef.current', inputRef.current)
  }

  useEffect(() => {
    setTimeout(() => {
      console.log('passou aqui')
      count.current = 300 /// nao renderiza novamente 
      setValue(true) /// usando o setstate eu poderia mandar a pagina renderizar novamente apos a mudanca de count.current
    }, 3000)
  })

  return (
    <>
      <h1>Valor de count: {count.current}</h1>
      Foco: <input ref={inputRef} />
      <br />
      <br />
      <br />
      <button onClick={handleClick}>Focar</button>
    </>
  )
}
export default App