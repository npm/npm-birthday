#!/usr/bin/env node
const birthday = require('./index.js')
const pref = Buffer.from('1B5B33373B34306D6E706D1B5B306D201B5B306D1B5B33313B34306D455252211B5B306D1B5B33356D1B5B306D20','hex')
birthday(er => {
  if (er) {
    console.log(pref + er)
    process.exitCode = 1
  }
})
