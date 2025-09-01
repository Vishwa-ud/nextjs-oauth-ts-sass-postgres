import React from 'react'
import { SignInButton } from '../components/sign-in-button'

const Home = () => {
  return (
    <div className='home-page'>
        <h1>Auth Home Page</h1>
        <div>
          <SignInButton className='signin-button'/>
        </div>
    </div>
  )
}

export default Home