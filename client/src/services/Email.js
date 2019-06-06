import axios from 'axios'

const baseURL = 'http://localhost:300/'

class EmailService {
  constructor() {
    this.service = axios.create({
      baseURL,
      withCredentials: true
    })
  }

  wakeup = () => {
    return this.service
      .get('/wake-up')
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