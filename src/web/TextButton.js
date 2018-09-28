/**
 *
 * @author fuyg
 * @date  2018-09-28
 */

import Button from './Button'

class TextButton extends Button {
  /**
   * @constructor
   * @param {String} options.text
   * @param {Boolean} options.isHtml
   */
  constructor(options) {
    super(options)
    this.text = this.options.text
    this.isHtml = this.options.isHtml
  }

  render() {
    const { text, isHtml, el } = this
    if (isHtml) {
      el.innerHTML = text
    } else {
      const node = document.createTextNode(text)
      el.innerHTML = ''
      el.appendChild(node)
    }

    return this
  }
}

export default TextButton
