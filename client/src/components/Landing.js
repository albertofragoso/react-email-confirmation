import React from 'react'
import Spinner from './Spinner'
import { Mycontext } from '../context';

const Landing = () => (
  <Mycontext.Consumer>
    {
      ({ sendingEmail, handleSubmit, handleInput }) => {
        return (
          <form>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" name="email" onChange={handleInput} required/>
            </div>
            <div>
              <button type="submit" className="btn" disabled={sendingEmail} onClick={handleSubmit}>
              {sendingEmail
                ? <Spinner size="lg" spinning='spinnig' />
                : 'Here we go!'
              } 
              </button>
            </div>
          </form>
        )
      }
    }
  </Mycontext.Consumer>
)

export default Landing