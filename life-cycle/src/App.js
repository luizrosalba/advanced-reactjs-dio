import React, { Component } from 'react'
import Twitter from './Twitter' /// usando api do twitter


class App extends Component {

  state = {
    loading: false,
    actived: true
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: true
      })
    }, 3000)
  }

  /// criado com arrow function para nao ter problema de bind 
  onRemove = () => {
    this.setState({
      actived: false
    })
  }

  render () {
    
    const posts = [{
      title: 'xpto',
      description: 'foo'
    },{
      title: 'xpto',
      description: 'foo'
    }]

    return (
      <div>
        <button onClick={this.onRemove}>Remover component</button>
        {this.state.actived && ( /// se estado está ativo apresenta o componente 
          <Twitter posts={posts} loading={this.state.loading} />
        )}
      </div>
    )
  }
}

export default App
