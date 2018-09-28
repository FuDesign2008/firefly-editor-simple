/**
 *
 * @author fuyg
 * @date  2018-07-13
 */
import EventEmitter from 'wolfy87-eventemitter'

class TadpoleEditor extends EventEmitter {
  constructor(options) {
    super(options)
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

export default TadpoleEditor
