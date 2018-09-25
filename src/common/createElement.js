/**
 *
 * @author fuyg
 * @date  2018-09-07
 */

function objectToStyleString(styles) {
  return Object.keys(styles)
    .map((prop) => `${prop}: ${styles[prop]}`)
    .join(';')
}

function createElement(tag, attrs) {
  const element = document.createElement(tag)

  for (const prop in attrs) {
    if (prop === 'style') {
      element.style.cssText = objectToStyleString(attrs[prop])
    } else if (prop === 'className') {
      element.setAttribute('class', attrs[prop])
    } else if (prop === 'xlinkHref') {
      element.setAttributeNS(
        'http://www.w3.org/1999/xlink',
        'xlink:href',
        attrs[prop],
      )
    } else if (attrs.hasOwnProperty(prop)) {
      element.setAttribute(prop, attrs[prop])
    }
  }

  return element
}

export { objectToStyleString, createElement }
