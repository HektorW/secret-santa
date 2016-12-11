import React, { Component, PropTypes } from 'react'
import './present.css'


export default class Present extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    onDone: PropTypes.func.isRequired,
  }

  state = {
    open: false,
  }

  toggleOpen() {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { name, onDone } = this.props
    const { open } = this.state

    return (
      <div className={`present${open ? ' open': ''}`} onClick={() => this.toggleOpen()}>
        <div className='name' onClick={onDone}>
          <div className="help-text">Klicka på namnet</div>
          {name}
        </div>
        <div className="instruction">Klicka för att öppna!</div>
        
        <div className='rotate-container'>
          <div className='bottom'></div>
          <div className='front'></div>
          <div className='left'></div>
          <div className='back'></div>
          <div className='right'></div>
          
          <div className='lid'>
            <div className='lid-top'></div>
            <div className='lid-front'></div>
            <div className='lid-left'></div>
            <div className='lid-back'></div>
            <div className='lid-right'></div>
          </div>
        </div>
      </div>
    )
  }
}
