/**
 *
 * @author fuyg
 * @date  2018-07-13
 */
import EventEmitter from 'wolfy87-eventemitter'

class Editor extends EventEmitter {
  constructor(options) {
    super()
    // TODO
    this.el = options.el
    this.el.innerHTML = 'hello '
  }

  setContent() {
    // TODO
  }

  getContent() {
    // TODO
  }

  execCommand() {
    // TODO
  }
}

export default Editor
