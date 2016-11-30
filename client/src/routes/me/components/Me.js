import React from 'react'

import InspirationList from './InspirationList'

export default ({ realName, inspirations, addInspiration, updateInspiration, removeInspiration }) => (
  <div>
    <h1>{realName}</h1>
    <InspirationList
      inspirations={inspirations}
      addInspiration={addInspiration}
      updateInspiration={updateInspiration}
      removeInspiration={removeInspiration}
    />
  </div>
)
