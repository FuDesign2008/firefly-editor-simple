/**
 *
 * @author fuyg
 * @date  2018-09-25
 */

import View from '@/common/View'
import mergeDefaults from '@/common/mergeDefaults'

class Button extends View {
  /**
   * @constructor
   * @param {Object} options.command
   */
  constructor(options) {
    options = mergeDefaults(options, {
      tagName: 'button',
    })
    super(options)
    this.command = this.options.command
  }

  render() {
    throw new Error('Button - render() should be implemented by sub-class')
  }

  clickHandler(event) {
    event.preventDefault()
    this.emit('command', this.command)
  }

  bindDOMEvents() {
    const { el } = this
    this.addEventListener(el, 'click', 'clickHandler')
    return this
  }

  unbindDOMEvents() {
    const { el } = this
    this.removeEventListener(el, 'click', 'clickHandler')
    return this
  }
}

export default Button
