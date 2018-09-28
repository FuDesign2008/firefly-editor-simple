/**
 *
 * @author fuyg
 * @date  2018-09-25
 */

import ViewGroup from '@/common/ViewGroup'
import Button from './Button'
import TextButton from './TextButton'
import IconButton from './IconButton'
import mergeDefaults from '@/common/mergeDefaults'

class ButtonGroup extends ViewGroup {
  /**
   * @public
   * @param {Array<Object>} options.buttons
   */
  constructor(options) {
    options = mergeDefaults(options, {
      styles: {
        display: 'inline',
        'margin-right': '10px',
      },
    })
    super(options)

    this.bindEvents()
  }

  createSubViews() {
    const { options } = this
    const views = options.buttons.map((config) => {
      if (config.icon) {
        return new IconButton(config)
      } else if (config.text) {
        return new TextButton(config)
      } else {
        return new Button(config)
      }
    })

    return views
  }

  bindEvents() {
    const { subViews } = this

    subViews.forEach((view) => {
      view.on('command', (...args) => {
        this.emit('command', ...args)
      })
    })
  }
}

export default ButtonGroup
