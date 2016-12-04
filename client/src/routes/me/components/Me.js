import React from 'react'
import './me.css'

// import santaHatSrc from '../../../res/svg/hatsvg.svg'
import SantaHat from '../../../components/svg/SantaHat'

import InspirationList from './InspirationList'

export default ({ realname, inspirations, addInspiration, updateInspiration, removeInspiration, logout }) => (
  <div className='me'>
    <button className='logout' onClick={logout}><span className='icon-arrow_back' />Logga ut</button>

    <h1 className='name'>
      <span><SantaHat color='rgba(229, 206, 129, .75)' />{realname}</span>
    </h1>

    <InspirationList
      inspirations={inspirations}
      addInspiration={addInspiration}
      updateInspiration={updateInspiration}
      removeInspiration={removeInspiration}
    />
  </div>
)
