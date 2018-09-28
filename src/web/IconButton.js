/**
 *
 * @author fuyg
 * @date  2018-09-28
 */
import Button from './Button'
import { createElement } from '@/common/createElement'

class IconButton extends Button {
  /**
   * @constructor
   * @param {String} options.icon
   */
  constructor(options) {
    super(options)
    this.icon = this.options.icon
  }

  render() {
    const { icon, el } = this
    const child = createElement('i', {
      className: icon,
    })
    el.appendChild(child)
    return this
  }
}

export default IconButton
