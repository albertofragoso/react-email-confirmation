import React, { createContext, Component } from 'react'
import { API_URL } from './config'

export const Mycontext = createContext()

class MyProvider extends Component {
  state = {
    loading: true,
    sendingEmail: false
  }

  componentDidMount = () => {
   fetch(`${API_URL}/wake-up`)
    .then(res => res.json())
    .then(() => this.setState({ loading: false }))
    .catch(err => console.log(err))
  }



  render() {
    return(
      <Mycontext.Provider value={{
        loading: this.state.loading
      }}>
        {this.props.children}
      </Mycontext.Provider>
    )
  }
}

export default MyProvider