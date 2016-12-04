import React, { Component } from 'react'
import './inspiration-item.css'

import Ball from '../../../components/svg/Ball'
import Bell from '../../../components/svg/Bell'
import MistleToe from '../../../components/svg/MistleToe'
import Polka from '../../../components/svg/Polka'
import Present from '../../../components/svg/Present'
import SantaHat from '../../../components/svg/SantaHat'
import Tree from '../../../components/svg/Tree'

const icons = [
  Tree,
  Polka,
  Bell,
  Ball,
  MistleToe,
  Present,
  SantaHat
]

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
    const { value, remove, isCreateNew, index } = this.props
    const { hasFocus } = this.state

    let className = 'inspiration-item'
    if (isCreateNew) className += ' create-new'
    if (hasFocus) className += ' has-focus'

    const Icon = icons[index % icons.length]

    return (
      <li className={className}>
        <Icon className='svg-icon' color='rgba(229, 206, 129, .75)' />
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
