import React from 'react'
import Present from './svg/Present'
import Tree from './svg/Tree'
import './santa-name.css'

export default ({ name }) => (
  <h1 className='big-name santa-name assigned-name'>
    <span>
      <Tree className='tree' />
      {name}
      <Present className='present' />
    </span>
  </h1>
)
