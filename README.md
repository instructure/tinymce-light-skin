# TinyMCE Light Skin

This is a version of the [Pixabay's Light TinyMCE Skin][1] packaged with all
static assets in the JavaScript. This makes it easier to inlcude in modules
that wrap TinyMCE without requiring consumers to serve the skin assets.

## Modifications

Some slight modifications to the original skin have been made:

  - IE7 specific CSS has been removed
  - WOFF is the only font format used

This makes the bundle smaller and still provides good support for modern
browsers.

## Usage

```javascript
import skin from 'tinymce-light-skin'

// append styles to head
skin.use()

// when initializing TinyMCE set skin to false
tinymce.init({ skin: false })

// optionaly remove styles from head based on reference count
skin.unuse()

// inject content styles into the editor's iframe
tinymce.init({ content_style: skin.contentStyle })

// inline variants
skin.useInline()
skin.unuseInline()
```

[1]: https://pixabay.com/en/blog/posts/a-modern-custom-theme-for-tinymce-4-40/
