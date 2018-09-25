/**
 *
 * @author fuyg
 * @date  2018-09-06
 */

import { Editor } from '@/web'

const target = document.getElementById('editor')
const editor = new Editor({
  el: target,
})

editor.setContent('<h1>hello tadpole</h1>')

export default editor
