/**
 *
 * @author fuyg
 * @date  2018-07-13
 */
import EventEmitter from 'wolfy87-eventemitter'
import EditView from '@/core/EditView'
import CommandManager from '@/core/CommandManager'
import Toolbar from './Toolbar'

class Editor extends EventEmitter {
  constructor(options) {
    super(options)

    this.options = options

    this.commandManager = new CommandManager({
      document: window.document,
    })

    const { el } = options

    const toolbar = new Toolbar()
    toolbar.mount(el)
    toolbar.render()
    this.toolbar = toolbar

    const editView = new EditView()
    editView.mount(el)
    this.editView = editView

    this.adjustCss()
    this.bindEvents()
  }

  adjustCss() {
    const { options, editView, toolbar } = this
    options.el.style.display = 'flex'
    options.el.style.flexFlow = 'column nowrap'

    toolbar.el.style.flexShrink = '0'
    toolbar.el.style.flexGrow = '0'
    toolbar.el.style.paddingBottom = '10px'

    editView.el.style.height = '100%'
  }

  bindEvents() {
    const { toolbar } = this
    toolbar.on('command', (...args) => {
      this.execCommand(...args)
    })
  }

  setContent(html) {
    // TODO
    this.editView.setContent(html)
  }

  getContent() {
    // TODO
  }

  execCommand(name, value) {
    const cmd = CommandManager.createCommand(name, value)
    this.commandManager.execCommand(cmd)
  }
}

export default Editor
