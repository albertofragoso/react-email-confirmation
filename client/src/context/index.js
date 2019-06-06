import React, { createContext, Component } from 'react'
import notify from 'react-notify-toast'
import EmailService from '../services/Email'

export const Mycontext = createContext()

const service = new EmailService()

class MyProvider extends Component {
  state = {
    loading: true,
    sendingEmail: false,
    email: '',
    confirming: true
  }

  componentDidMount = () => {
    service
      .wakeup()
      .then(response => this.setState({ loading: false }))
      .catch(err => console.log(err))
  }

  handleInput = e => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = e => {
    this.setState({ sendingEmail: true })
    service
    .sendemail(this.state.email)
    .then(response => {
      this.setState({ sendingEmail: false })
      notify.show(response.msg)
    })
    .catch(err => console.log(err))

  }

  render() {
    return(
      <Mycontext.Provider value={{
        loading: this.state.loading,
        sendingEmail: this.state.sendingEmail,
        handleInput: this.handleInput,
        handleSubmit: this.handleSubmit
      }}>
        {this.props.children}
      </Mycontext.Provider>
    )
  }
}

export default MyProvider