/**
 *
 * @author fuyg
 * @date  2018-09-25
 */

class Command {
  constructor(options) {
    options = options || {}

    this.name = options.name
    this.value = options.value
  }

  /**
   * @return {Boolean}
   */
  execute(doc) {
    const { name, value } = this
    doc.execCommand(name, false, value)
  }

  /**
   * @public
   * @static
   * @param {String} name
   * @param {Object|String} value
   * @return {Command}
   */
  static create(name, value) {
    if (name && name instanceof Command) {
      return name
    }
    if (name && typeof name === 'string') {
      return new Command(name, value)
    }
  }

  /**
   * @public
   * @static
   * @param {Command} cmd
   * @return {Command}
   */
  static clone(cmd) {
    if (cmd && cmd instanceof Command) {
      return new Command(cmd.name, cmd.value)
    }

    return Command.create.apply(Command, arguments)
  }
}

export default Command
