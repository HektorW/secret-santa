import React from 'react'
import SantaHat from './svg/SantaHat'
import './santa-name.css'

export default ({ name }) => (
  <h1 className='big-name santa-name'>
    <span><SantaHat />{name}</span>
  </h1>
)
