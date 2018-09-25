/**
 *
 * @author fuyg
 * @date  2018-09-07
 */

import View from '@/common/View'

class EditView extends View {
  attributes = {
    contenteditable: 'true',
  }

  constructor(options) {
    super(options)
    this.setEditable(true)
  }

  setEditable(isEditable) {
    this.setContentEditable(isEditable)
  }

  getContentEditable() {
    const { el } = this
    const value = el.getAttribute('contenteditable')
    return value
  }

  setContentEditable(bool) {
    const value = this.getContentEditable()
    if (value === bool) {
      return
    }
    this.el.setAttribute('contenteditable', bool)
  }

  setContent(html) {
    this.el.innerHTML = html
  }
}

export default EditView
