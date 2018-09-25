/**
 *
 * @author fuyg
 * @date  2018-07-13
 */
import EventEmitter from 'wolfy87-eventemitter'
import EditView from '@/core/EditView'

class Editor extends EventEmitter {
  constructor(options) {
    super(options)
    const editView = new EditView()
    editView.mount(options.el)
    this.editView = editView
  }

  setContent(html) {
    // TODO
    this.editView.setContent(html)
  }

  getContent() {
    // TODO
  }

  execCommand() {
    // TODO
  }
}

export default Editor
