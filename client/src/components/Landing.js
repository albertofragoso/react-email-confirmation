import React from 'react'
import Loader from './Loader'
import { Mycontext } from '../context';
import { Container, Col, Row , Form, Button } from 'react-bootstrap'

const Landing = () => (
  <Mycontext.Consumer>
    {
      ({ sendingEmail, handleSubmit, handleInput }) => {
        return (
          <Container>
            <Row>
              <Col sm={12} md={{ span: 6, offset: 3}}>
              <Form>
                <Form.Group controlId="formBasucEmail">
                  <Form.Label>Tu email aquí: </Form.Label>
                  <Form.Control type="email" placeholder="..." name="email" required onChange={handleInput}/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={handleSubmit} >
                  {sendingEmail
                    ? <><Loader /> Sending...</>
                    : <span role="img" arial-label="rocket">Here we go! 🚀</span>
                  }
                </Button>
              </Form>
              </Col>
            </Row>
          </Container>
        )
      }
    }
  </Mycontext.Consumer>
)

export default Landing