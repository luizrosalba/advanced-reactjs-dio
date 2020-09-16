import React, { Component } from 'react'
import ErrorImg from './error.jpg'

class ErrorBoundary extends Component {

  constructor(props){
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      hasError: true
      
    })
  }

  render() {
    if(this.state.hasError) {
      return <img alt='some value' src={ErrorImg} />
    }
    return this.props.children
  }
}

export default ErrorBoundary
