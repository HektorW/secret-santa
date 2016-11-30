import React from 'react'

import InspirationItem from './InspirationItem'

export default ({ inspirations, addInspiration, updateInspiration, removeInspiration }) => (
  <div>
    <ul>
      {inspirations.map(({ id, value }) =>
        <InspirationItem
          key={id}
          value={value}
          update={value => updateInspiration(id, value)}
          remove={() => removeInspiration(id)}
        /> 
      )}
    </ul>
    <button onClick={addInspiration}>Lägg till</button>
  </div>
)
