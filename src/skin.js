import canvas from './canvas.css'
import skin from '../vendor/light/skin.min.css'
import content from '../vendor/light/content.min.css'
import inline from '../vendor/light/content.inline.min.css'

export function use () {
  skin.use()
}

export function useCanvas () {
  skin.use()
  canvas.use()
}

export function unuseCanvas () {
  skin.unuse()
  canvas.unuse()
}

export function unuse () {
  skin.unuse()
}

export function useInline () {
  skin.use()
  inline.use()
}

export function unuseInline () {
  skin.unuse()
  inline.unuse()
}

export var contentStyle = content.toString()

export default {
  use: use,
  unuse: unuse,
  useCanvas: useCanvas,
  unuseCanvas: unuseCanvas,
  useInline: useInline,
  unuseInline: unuseInline,
  contentStyle: contentStyle
}
