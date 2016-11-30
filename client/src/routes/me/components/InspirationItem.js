import React, { Component } from 'react'

export default class InspirationItem extends Component {  
  render() {
    const { value, update, remove } = this.props

    return (
      <li>
        <input
          defaultValue={value}
          type='text'
          ref='input'
        />
        <button onClick={() => update(this.refs.input.value)}>Uppdatera</button>
        <button onClick={remove}>Ta bort</button>
      </li>
    )
  }
}
