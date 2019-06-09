import axios from 'axios'

const baseURL = 'http://localhost:3000/'

class EmailService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }

  wakeup = () => {
    return this.service
      .get('/wakeup')
      .then(({ data }) => data)
      .catch(err => err)
  }

  sendemail = email => {
    return this.service
      .post('/email', email)
      .then(({ data }) => data)
      .catch(err => err)
  }
}

export default EmailService