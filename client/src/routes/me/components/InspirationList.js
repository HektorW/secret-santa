import React from 'react'
import './inspiration-list.css'

import InspirationItem from './InspirationItem'

export default ({ inspirations, addInspiration, updateInspiration, removeInspiration }) => (
  <div className='inspiration-list'>
    <p>Lägga till lite inspiration för att hjälpa din tomte hitta något som passar dig.</p>
    <ul>
      {inspirations.concat([{ isCreateNew: true }]).map(({ id, value, isCreateNew }, index) =>
        isCreateNew === true
          ? <InspirationItem
              index={index}
              key={'create-new' + inspirations.length}
              value='Lägg till inspiration'
              update={value => addInspiration(value)}
              isCreateNew={true}
            /> 
          : <InspirationItem
              index={index}
              key={id}
              value={value}
              update={value => updateInspiration(id, value)}
              remove={() => removeInspiration(id)}
            />
      )}
    </ul>
  </div>
)
