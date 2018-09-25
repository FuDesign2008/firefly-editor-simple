/**
 *
 * @author fuyg
 * @date  2018-09-25
 */

import ViewGroup from '@/common/ViewGroup'
import Button from './Button'

class ButtonGroup extends ViewGroup {
  className = 'btn-group'

  /**
   * @public
   * @param {Array<Object>} options.buttons
   */
  constructor(options) {
    super(options)
  }

  createSubViews() {
    const { options } = this
    const views = options.buttons.map((config) => {
      return new Button(config)
    })

    return views
  }
}

export default ButtonGroup
