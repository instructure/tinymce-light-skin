'use strict'

const jsdom = require('mocha-jsdom')
const assert = require('assert')

describe('skin', () => {
  let skin

  jsdom()

  before(() => {
    skin = require('../lib/skin')
  })

  describe('use', () => {
    afterEach(() => {
      skin.unuse()
    })

    it('adds styles to head', () => {
      assert.equal(document.styleSheets.length, 0)
      skin.use()
      assert.equal(document.styleSheets.length, 1)
      assert(/\.mce-container/.test(document.querySelector('style').textContent))
    })

    it('adds uses data url for font-face', () => {
      skin.use()
      assert(/data:application\/font-woff/.test(document.querySelector('style').textContent))
    })
  })

  describe('unuse', () => {
    beforeEach(() => {
      skin.use()
    })

    it('removes styles from head', () => {
      assert.equal(document.styleSheets.length, 1)
      skin.unuse()
      assert.equal(document.styleSheets.length, 0)
    })
  })

  describe('useInline', () => {
    afterEach(() => {
      skin.unuseInline()
    })

    it('adds styles to head', () => {
      assert.equal(document.styleSheets.length, 0)
      skin.useInline()
      assert.equal(document.styleSheets.length, 2)
    })
  })

  describe('unuseInline', () => {
    beforeEach(() => {
      skin.useInline()
    })

    it('removes styles from head', () => {
      assert.equal(document.styleSheets.length, 2)
      skin.unuseInline()
      assert.equal(document.styleSheets.length, 0)
    })
  })


  describe('default export', () => {
    it('has the correct shape', () => {
      const expected = {
        use: skin.use,
        unuse: skin.unuse,
        useCanvas: skin.useCanvas,
        unuseCanvas: skin.unuseCanvas,
        useInline: skin.useInline,
        unuseInline: skin.unuseInline,
        contentStyle: skin.contentStyle,
        default: {
          use: skin.use,
          unuse: skin.unuse,
          useCanvas: skin.useCanvas,
          unuseCanvas: skin.unuseCanvas,
          useInline: skin.useInline,
          unuseInline: skin.unuseInline,
          contentStyle: skin.contentStyle,
        }
      }
      assert.deepEqual(skin, expected)
    })
  })

  describe('style strings', () => {
    it('exports content style', () => {
      assert(/body\{/.test(skin.contentStyle))
      assert(/\.mce-object/.test(skin.contentStyle))
    })
  })
})
