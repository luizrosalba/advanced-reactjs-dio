import React, { Component } from 'react'

class Twitter extends Component {

  state = {
    tweet: 'title'
  }

  /// Final da montagem 
  /// aqui pode chamar serviços ,verificar se está carregando ... 
  componentDidMount() { 
    const { posts, loading } = this.props
    console.log('componentDidMount', posts)
    console.log('componentDidMount:loading', loading)
    
  }

  //// Atualização 
  componentDidUpdate(prevProps) {
    const { loading } = this.props
    if (this.props.loading !== prevProps.loading) {
      console.log('componentDidUpdate:loading', loading)
    }
  }

// desmontagem 
  componentWillUnmount() { 
    console.log('componentWillUnmount: fui removido :(')
  }

  /// retorna um boleano , se for true renderiza de novo senao nao renderiza 
  shouldComponentUpdate(nextProps, nextState) {
    return this.state.tweet !== nextState.tweet
  }

  tweet = () => {
    this.setState({
      tweet: true
    })
  }

  render () {
    const { posts } = this.props
    console.log('render', posts)
    return (
      <div>
        <button onClick={this.tweet}>Re-render</button>
        tests
      </div>
    )
  }
}

export default Twitter
