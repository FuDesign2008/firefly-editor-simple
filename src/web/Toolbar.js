/**
 *
 * @author fuyg
 * @date  2018-09-25
 */

import ViewGroup from '@/common/ViewGroup'
import ButtonGroup from './ButtonGroup'
import toolbarConfig from './toolbarConfig'
// import mergeDefaults from '@/common/mergeDefaults'

//eslint-disable-next-line
import css from 'bootstrap/dist/css/bootstrap.min.css'

class Toolbar extends ViewGroup {
  constructor(options) {
    // options = mergeDefaults(options, {
    // })
    super(options)

    this.bindEvents()
  }

  createSubViews() {
    const views = toolbarConfig.map((buttonGroupConfig) => {
      const buttonGroup = new ButtonGroup({
        buttons: buttonGroupConfig,
      })
      return buttonGroup
    })
    return views
  }

  mouseDownHandler(event) {
    event.preventDefault()
  }

  bindDOMEvents() {
    const { el } = this
    this.addEventListener(el, 'mousedown', 'mouseDownHandler')
    return this
  }

  unbindDOMEvents() {
    const { el } = this
    this.removeEventListener(el, 'mousedown', 'mouseDownHandler')
    return this
  }

  bindEvents() {
    const { subViews } = this

    subViews.forEach((view) => {
      view.on('command', (...args) => {
        this.emit('command', ...args)
      })
    })
  }
}

export default Toolbar
