import React, { useEffect, useState, memo } from 'react'

/// com memo conseguimos criar componentes puros (pure components)
//Pure Components do not depend or modify the state of variables 
//outside their scope. 

/// usestate [nomeqquer, setnomeQquer] 


/// se a propriedade true não atualiza o ciclo de vida 
const areEqual = (prevProps, nextProps) => {
  return prevProps.loading === nextProps.loading
}

/// funcional e não classe 

function Twitter(props) {
  const { loading } = props
  const [tweet, setTweet] = useState()
  
  // componentDidMount

  useEffect(() => {
    const { posts, loading } = props
    console.log('componentDidMount', posts)
    console.log('componentDidMount:loading', loading)
  }, [])

  // componentDidUpdate
  /// acessando o loading da funcao externa
  /// caso loading viesse como argumnento prevaleceria o do argumento
  /// chama o serviço toda vez que loading mudar exemplo : usuario preencheo cep e 
  /// recebemos as informações do cep 
  useEffect(() => {
    console.log('componentDidUpdate', loading)
  }, [loading]) 


  //componentWillUnmount
  /// sempre que há um return dentro de um use effect
  /// ele será componentwillunmount 
  /// poderia até ter return em outros useeffect mas eh 
  /// boa prática separar 
  useEffect(() => {
    return () => {
      console.log('componentWillUnmount: fui removido :(')
    }
  }, [])

  /// const para nao alterar o valor dessa variavel 
  const handleTweet = () => {
    setTweet('Tweet atualizado')
  }

  console.log('Tweet atualizado:', tweet)
  return (
    <div>
      <button onClick={handleTweet}>Re-render</button>
      tests
    </div>
    )
}

export default memo(Twitter, areEqual)
