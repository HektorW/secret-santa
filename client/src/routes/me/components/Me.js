import React from 'react'
import { Link } from 'react-router'
import InspirationList from './InspirationList'
import Logout from '../../../components/Logout'
import SantaName from '../../../components/SantaName'
import santaIconSrc from '../../../res/svg/ic_santa.svg'
import './me.css'

export default ({ assigned, realname, inspirations, addInspiration, updateInspiration, removeInspiration }) => (
  <div className='me'>
    <div className="navigation">
      <Logout />
      {assigned
        ? <Link to='/assigned' className='link assigned-link'>Till <img src={santaIconSrc} alt='tomte' /></Link>
        : null 
      }
    </div>

    <SantaName name={realname} />

    <InspirationList
      inspirations={inspirations}
      addInspiration={addInspiration}
      updateInspiration={updateInspiration}
      removeInspiration={removeInspiration}
    />
  </div>
)
