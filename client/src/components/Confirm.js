import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'
import EmailService from '../services/Email'
import notify from 'react-notify-toast'
import { Container, Col, Row } from 'react-bootstrap'

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
      <Container>
        <Row>
          <Col sm={12} md={{ span: 6, offset: 3}}>
          {confirming
            ? <Loader />
            : <Link to='/'>
                <Loader />
              </Link>
          }
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Confirm