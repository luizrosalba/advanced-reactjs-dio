import React, { Fragment } from 'react'

const store = ['', '', '']

function Column() {
  return (
    <tr>
      <td>Tênis</td>
      <td>Roupa</td>
    </tr>
  )
}

///  <Fragment key={`column-${key}`}>  sempre que tiver uma iteracao de lista precisa  de uma chave unica não funciona com sintax sugar
// {store.map(renderColumns)}      //// melhor fazer assim , passa uma função , fica mais claro do que criar um comando grande   
function App() {

  const renderColumns = (element, key) => (
    <Fragment key={`column-${key}`}> 
      <Column />
    </Fragment>
  )
  
  return (
    <table>
      
        {store.map(renderColumns)}      //// melhor fazer assim , passa uma função , fica mais claro do que criar um comando grande   
      
    </table>
  )
}

export default App