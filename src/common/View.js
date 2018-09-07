import EventEmitter from 'wolfy87-eventemitter'
import { createElement } from './createElement'

const viewOptions = ['el', 'attributes', 'className', 'tagName']

// private method name
const configure = Symbol('configure')
const ensureElement = Symbol('ensureElement')

class View extends EventEmitter {
  tagName = 'div'

  constructor(options) {
    super(options)
    this[configure](options)
    this[ensureElement]()
    this.initialize()
  }

  /**
   * This method should be override
   * @public
   */
  initialize() {
    return this
  }

  /**
   * This method should be override
   * @public
   */
  render() {
    return this
  }

  /**
   * This method should be override
   * @public
   */
  bindDOMEvents() {
    return this
  }

  /**
   * This method should be override
   * @public
   */
  unbindDOMEvents() {
    return this
  }

  /**
   * @public
   * @param {HTMLElement} parentNode
   */
  mount(parentNode) {
    if (!parentNode || !parentNode.appendChild) {
      return
    }
    parentNode.appendChild(this.el)
  }

  /**
   * @public
   */
  remove() {
    const { el } = this
    if (el && el.parentNode) {
      el.parentNode.removeChild(el)
    }
    this.unbindDOMEvents()
    this.removeAllListeners()
    return this
  }

  /**
   * @public
   */
  destroy() {
    this.remove()
    viewOptions.forEach((key) => {
      this[key] = null
    })
    this.options = null
  }

  /**
   * @private
   * @param {Object} options
   */
  [configure](options) {
    Object.assign(
      this,
      ...viewOptions.map((key) => {
        return {
          [key]: options[key],
        }
      }),
    )
    this.options = options
  }

  /**
   * @private
   */
  [ensureElement]() {
    const { el, id, attributes, className, tagName } = this
    if (!el) {
      const attrs = Object.assign({}, attributes)
      if (id) {
        attrs.id = this.id
      }
      if (className) {
        attrs.className = className
      }
      const element = createElement(tagName, attrs)
      this.el = element
    }
  }
}

export default View
