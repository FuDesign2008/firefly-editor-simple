import View from './View'

class ViewGroup extends View {
  /**
   * @public
   * @param {HTMLElement} [options.el]
   * @param {Object} [options.attributes]
   * @param {String|Object|Array} [options.className]
   * @param {String} [options.tagName]
   * @param {Array<View>} [options.subViews]
   */
  constructor(options = {}) {
    super(options)

    this.subViews = []
    this.addSubViews()
  }

  /**
   * This method should be override
   *
   * @public
   */
  createSubViews() {
    const { options } = this
    if (options.subViews) {
      return options.subViews
    }
  }

  addSubViews() {
    const views = this.createSubViews()
    if (!views) {
      return
    }
    const { el } = this
    views.forEach((item) => {
      item.mount(el)
      this.subViews.push(item)
    })
  }

  /**
   * This method should be override
   * @public
   */
  render() {
    const { subViews } = this
    subViews.forEach((item) => {
      item.render()
    })
    return this
  }

  /**
   * @public
   */
  remove() {
    const { subViews } = this
    subViews.forEach((item) => {
      item.remove()
    })
    super.remove()
    return this
  }

  /**
   * @public
   */
  destroy() {
    super.destroy()
    this.subViews = null
  }
}

export default ViewGroup
