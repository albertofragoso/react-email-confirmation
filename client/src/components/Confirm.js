import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import EmailService from '../services/Email'
import notify from 'react-notify-toast'

const service = new EmailService()

class Confirm extends Component {
  state = {
    confirming: true
  }

  componentDidMount = () => {
    const { id } = this.props.match.params
    service
      .get(`/email/confirm/${id}`)
      .then(response => {
        this.setState({ confirming: false  })
        notify.show(response.msg)
      })
      .catch(err => console.log(err))
  }

  render = () => {
    const { confirming } = this.state
    return(
      <div className='confirm'>
        {confirming
          ? <Loader />
          : <Link to='/'>
              <Loader />
            </Link>
        }
      </div>
    )
  }
}

export default Confirm