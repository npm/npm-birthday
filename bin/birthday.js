#!/usr/bin/env node
const birthday = require('../lib/index.js')
const pref = '\x1B[37;40mnpm\x1B[0m \x1B[0m\x1B[31;40mERR!\x1B[0m\x1B[35m\x1B[0m '
birthday(er => {
  if (er) {
    console.log(pref + er.message)
    process.exitCode = 1
  }
})
