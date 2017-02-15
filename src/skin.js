import skin from '../vendor/light/skin.min.css'
import content from '../vendor/light/content.min.css'
import inline from '../vendor/light/content.inline.min.css'

export function use () {
  skin.use()
  content.use()
}

export function unuse () {
  skin.unuse()
  content.unuse()
}

export function useInline () {
  skin.use()
  inline.use()
}

export function unuseInline () {
  skin.unuse()
  inline.unuse()
}

export default {
  use: use,
  unuse: unuse,
  useInline: useInline,
  unuseInline: unuseInline
}
