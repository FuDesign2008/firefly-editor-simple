/**
 *
 * @author fuyg
 * @date  2018-09-25
 */

export default [
  [
    {
      command: 'undo',
      text: '撤销',
      isHtml: false,
    },
    {
      command: 'redo',
      text: '重做',
      isHtml: false,
    },
  ],

  [
    {
      command: 'bold',
      text: '<b>Bold</b>',
      isHtml: true,
    },
    {
      command: 'italic',
      text: '<em>italic</em>',
      isHtml: true,
    },
    {
      command: 'underline',
      text: '<u><b>U</b></u>',
      isHtml: true,
    },
    {
      command: 'strikeThrough',
      text: '<strike>abc</strike>',
      isHtml: true,
    },
  ],
]
