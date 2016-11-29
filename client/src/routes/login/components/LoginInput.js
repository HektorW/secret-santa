import React from 'react'
import { Link } from 'react-router'

export default () => (
  <div>
    <h1>Login</h1>
    <form>
      <label>
        <span>Användarnamn: </span>
        <input type='text' name='username' placeholder='Användarnamn' />
      </label>
      <label>
        <span>Lösenord: </span>
        <input type='password' name='password' placeholder='Lösenord' />
      </label>
      <input type='submit' value='Logga in' />
    </form>
    <Link to='/register'>Registrera</Link>
  </div>
)
