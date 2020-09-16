import React, { useState, useEffect } from 'react'
import { ThemeContext, themes } from './Theme' 
import Card from './Card'

function App () {
  const [token, setToken] = useState() /// renderiza a aplicação de novo para setar o token 

  useEffect(() => {
    setTimeout(() => {
      setToken('34q4m4k3ak43ak4kak4')
    }, 4000)
  }, [setToken])

  return (
    <ThemeContext.Provider value={{ ...themes.primary, token }}>
      <Card />  /// card está consumindo theme context 
    </ThemeContext.Provider>
  )
}

export default App
