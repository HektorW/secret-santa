import React, { Component } from 'react'
import SnowManager from './SnowManager'
import './snowfall.css'

export default class SnowfallComponent extends Component {
  constructor() {
    super()
    this.onWindowResize = this.onWindowResize.bind(this)
    this.onWindowBlur = this.onWindowBlur.bind(this)
    this.onWindowFocus = this.onWindowFocus.bind(this)
  }

  componentDidMount() {
    const { canvas } = this.refs
    this.snowManager = new SnowManager(canvas)
    this.resize()
    this.snowManager.start()

    window.addEventListener('resize', this.onWindowResize)
    window.addEventListener('blur', this.onWindowBlur)
    window.addEventListener('focus', this.onWindowFocus)
  }

  componentWillUnmount() {
    this.snowManager.pause()
  }

  onWindowResize() {
    this.resize()
  }

  onWindowBlur() {
    this.snowManager.pause()
  }

  onWindowFocus() {
    this.snowManager.start()
  }

  resize() {
    const width = window.innerWidth
    const height = window.innerHeight
    this.snowManager.resize(width, height)
  }

  render() {
    return <canvas className='snowfall' ref='canvas' />
  }
}
