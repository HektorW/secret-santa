import React from 'react'

import InspirationList from './InspirationList'

export default ({ realname, inspirations, addInspiration, updateInspiration, removeInspiration, logout }) => (
  <div>
    <h1>{realname}</h1>
    <InspirationList
      inspirations={inspirations}
      addInspiration={addInspiration}
      updateInspiration={updateInspiration}
      removeInspiration={removeInspiration}
    />
    <button onClick={logout}>Logga ut</button>
  </div>
)
