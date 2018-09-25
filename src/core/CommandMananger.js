/**
 *
 * @author fuyg
 * @date  2018-09-10
 */

import EventEmitter from 'wolfy87-eventemitter'
import Command from './Command'

class CommandManager extends EventEmitter {
  constructor(options) {
    super(options)
    this.document = options.document || document
  }

  execNativeCommand(name, value) {
    this.document.execCommand(name, false, value)
  }

  /**
   * @public
   * @param {Command}
   * @return {Boolean}
   */
  execCommand(cmd) {
    if (!cmd || !(cmd instanceof Command)) {
      throw new Error('command is not valid')
    }
    return cmd.execute(this.document)
  }
}

export default CommandManager
