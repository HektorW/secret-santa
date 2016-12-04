import React, { Component } from 'react'
import './inspiration-item.css'

export default class InspirationItem extends Component {
  state = {
    hasFocus: false,
  }

  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
  }

  onSubmit(event) {
    event.preventDefault()
    this.update()
  }

  onBlur() {
    this.update();
    this.setState({ hasFocus: false })
  }

  onFocus() {
    this.setState({ hasFocus: true })
  }

  update() {
    const { value } = this.refs.input
    if (value) {
      this.props.update(value)
    }
  }

  render() {
    const { value, remove, isCreateNew } = this.props
    const { hasFocus } = this.state

    let className = 'inspiration-item'
    if (isCreateNew) className += ' create-new'
    if (hasFocus) className += ' has-focus'

    return (
      <li className={className}>
        <form onSubmit={this.onSubmit}>
          <input
            className='input'
            defaultValue={isCreateNew ? null : value}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            placeholder={value}
            type='text'
            ref='input'
          />  
        </form>
        
        {isCreateNew === true
          ? null
          : <button className='remove icon-close2' onClick={remove} tabIndex='-1' />
        }
      </li>
    )
  }
}
