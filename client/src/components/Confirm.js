import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Loader from './Loader'
import EmailService from '../services/Email'
import { notify } from 'react-notify-toast'
import { Container, Col, Row } from 'react-bootstrap'

const service = new EmailService()

class Confirm extends Component {
  state = {
    confirming: true
  }

  componentDidMount = () => {
    const { id } = this.props.match.params
    service
      .confirmemail(id)
      .then(response => {
        this.setState({ confirming: false  })
        notify.show(response.msg, 'warning')
      })
      .catch(err => notify.show(err, 'danger'))
  }

  render = () => {
    const { confirming } = this.state
    return(
      <Container>
        <Row>
          <Col sm={12} md={{ span: 6, offset: 3}}>
          {confirming
            ? <Loader />
            : <Redirect to='/'>
                <Loader />
              </Redirect>
          }
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Confirm