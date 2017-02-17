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
      assert.equal(document.styleSheets.length, 2)
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
      assert.equal(document.styleSheets.length, 2)
      skin.unuse()
      assert.equal(document.styleSheets.length, 0)
    })
  })

  describe('default export', () => {
    it('has the correct shape', () => {
      const expected = {
        use: skin.use,
        unuse: skin.unuse,
        useInline: skin.useInline,
        unuseInline: skin.unuseInline,
        default: {
          use: skin.use,
          unuse: skin.unuse,
          useInline: skin.useInline,
          unuseInline: skin.unuseInline,
        }
      }
      assert.deepEqual(skin, expected)
    })
  })
})
