/**
 *
 * @author fuyg
 * @date  2018-09-25
 */

import View from '@/common/View'
import { createElement } from '@/common/createElement'

class Button extends View {
  tagName = 'a'

  className = 'btn'

  /**
   * @public
   * @param {Object} options.command
   * @param {Object} options.icon
   */
  constructor(options) {
    super(options)
    this.clickHandler = this.clickHandler.bind(this)
    this.icon = this.options.icon
    this.command = this.options.command
  }

  render() {
    const { el, icon } = this
    const iconElement = createElement('i', {
      className: `icon-${icon}`,
    })
    el.innerHTML = ''
    el.appendChild(iconElement)
    return this
  }

  clickHandler(event) {
    event.preventDefault()
    this.emit('command', this.commandName)
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
