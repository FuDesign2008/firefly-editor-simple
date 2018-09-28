import EventEmitter from 'wolfy87-eventemitter'
import { createElement } from './createElement'
import mergeDefaults from './mergeDefaults'

const viewOptions = ['el', 'attributes', 'styles', 'className', 'tagName']

// private method name
const configure = Symbol('configure')
const ensureElement = Symbol('ensureElement')

class View extends EventEmitter {
  /**
   * @public
   * @param {HTMLElement} [options.el]
   * @param {Object} [options.attributes]
   * @param {Object} [options.styles]
   * @param {String|Object|Array} [options.className]
   * @param {String} [options.tagName = 'div']
   */
  constructor(options = {}) {
    options = mergeDefaults(options, {
      tagName: 'div',
    })
    super(options)
    this.domEventListers = {}

    this[configure](options)
    this[ensureElement]()
  }

  /**
   * This method should be override
   * @public
   */
  render() {
    return this
  }

  /**
   * @public
   * @param {HTMLElement} el
   * @param {String} event
   * @param {String} methodName
   * @param {Boolean|Object} [options=false]
   */
  addEventListener(el, event, methodName, options = false) {
    const { domEventListers } = this
    if (!domEventListers[methodName]) {
      this[methodName] = this[methodName].bind(this)
      domEventListers[methodName] = true
    }
    const listener = this[methodName]
    el.addEventListener(event, listener, options)
  }

  /**
   * @public
   * @param {HTMLElement} el
   * @param {String} event
   * @param {String} methodName
   * @param {Boolean|Object} [options=false]
   */
  removeEventListener(el, event, methodName, options = false) {
    const { domEventListers } = this
    if (!domEventListers[methodName]) {
      return
    }
    const listener = this[methodName]
    el.addEventListener(event, listener, options)
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
    const { domEventListers } = this
    if (Object.keys(domEventListers).length > 0) {
      throw new Error('unbindDOMEvents() method should be implemented')
    }
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
  unmount() {
    const { el } = this
    if (el && el.parentNode) {
      el.parentNode.removeChild(el)
    }
    return this
  }

  /**
   * @public
   */
  remove() {
    this.unmount()
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
    this.domEventListers = null
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
        if (options[key]) {
          return {
            [key]: options[key],
          }
        }
      }),
    )
    this.options = options
  }

  /**
   * @private
   */
  [ensureElement]() {
    const { el, id, attributes, styles, className, tagName } = this
    if (!el) {
      const attrs = Object.assign({}, attributes)
      if (id) {
        attrs.id = this.id
      }
      if (className) {
        let classNameStr = ''

        if (Array.isArray(className)) {
          classNameStr = className.join(' ')
        } else if (typeof className === 'object') {
          const arr = Object.keys(className).map((key) => {
            const value = className[key]
            return value !== false ? key : ''
          })
          classNameStr = arr.join(' ')
        } else {
          classNameStr = className
        }
        attrs.className = classNameStr
      }

      if (styles) {
        attrs.style = styles
      }

      const element = createElement(tagName, attrs)
      this.el = element
    }

    this.bindDOMEvents()
  }
}

export default View
