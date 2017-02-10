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
})
