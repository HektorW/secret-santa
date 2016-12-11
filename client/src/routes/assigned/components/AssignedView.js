import React from 'react'
import { Link } from 'react-router'
import Logout from '../../../components/Logout'
import AssignedName from '../../../components/AssignedName'
import { getIconByIndex } from '../../../components/svg'
import santaIconSrc from '../../../res/svg/ic_santa.svg'
import snowmanIconSrc from '../../../res/svg/ic_snowman.svg'
import deerIconSrc from '../../../res/svg/ic_deer.svg'
import './assigned-view.css'


const renderInspirationList = assigned => (
  <div>
    <p>{assigned.realname} har skrivit lite inspiration för att hjälpa dig som tomte.</p>
    <ul>
      {assigned.inspirations.map((inspiration, index) => {
        const Icon = getIconByIndex(index)

        return (
          <li key={inspiration.id} className='inspiration-item'>
            <Icon className='svg-icon' />
            <span className="value">{inspiration.value}</span>
          </li>
        )
      })}
    </ul>
  </div>
)

const renderNoInspirations = assigned => (
  <div>
    <p>
      {assigned.realname} har inte skrivit in någon inspiration.
    </p>
    <p>
      Försök själv komma på någonting som du tror {assigned.realname} hade blivit glad för eller ta hjälp av någon :)
    </p>
  </div>
)


export default ({ assigned, resetRevealState }) => (
  <div className="assigned">
    <div className="navigation">
      <Logout />
      <Link to='/me' className='link edit-link'>Ändra inspiration</Link>
    </div>

    <div className='santa-preamble'>
      Du är <img src={santaIconSrc} alt='tomte' /> till:
    </div>

    <AssignedName name={assigned.realname} />
    
    <div className="inspiration-list">
      {assigned.inspirations.length === 0
        ? renderNoInspirations(assigned)
        : renderInspirationList(assigned)
      }

      <div className='inspiration-img'>
        {assigned.inspirations.length === 0
          ? <img src={snowmanIconSrc} alt='snowman'  onClick={resetRevealState} />
          : <img src={deerIconSrc} alt='deer' onClick={resetRevealState} />
        }
      </div>
    </div>
  </div>
)
