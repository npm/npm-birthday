const t = require('tap')

t.test('birthday (nope)', (t) => {
  t.plan(1)

  const RealDate = Date
  const consoleLog = console.log
  t.teardown(() => {
    global.Date = RealDate
    console.log = consoleLog
  })

  class FakeDate extends Date {
    getUTCMonth () {
      return 7
    }
  }

  global.Date = FakeDate
  console.log = () => undefined

  const birthday = t.mock('../', {})
  birthday((err) => {
    t.match(err.message, 'try again', 'not telling you the secret that easily are we?')
  })
})

t.test('birthday (nope again)', (t) => {
  t.plan(1)

  const RealDate = Date
  const consoleLog = console.log
  t.teardown(() => {
    global.Date = RealDate
    console.log = consoleLog
  })

  class FakeDate extends Date {
    getFullYear () {
      const now = new RealDate()
      return now.getFullYear() + 1
    }

    getUTCMonth () {
      return 9
    }
  }

  global.Date = FakeDate
  console.log = () => undefined

  const birthday = t.mock('../', {})
  birthday((err) => {
    t.match(err.message, 'try again', 'not telling you the secret that easily are we?')
  })
})

t.test('birthday (strike 3)', (t) => {
  t.plan(1)

  const RealDate = Date
  const consoleLog = console.log
  t.teardown(() => {
    global.Date = RealDate
    console.log = consoleLog
  })

  class FakeDate extends Date {
    getFullYear () {
      const now = new RealDate()
      return now.getFullYear() - 1
    }

    getUTCMonth () {
      return 11
    }
  }

  global.Date = FakeDate
  console.log = () => undefined

  const birthday = t.mock('../', {})
  birthday((err) => {
    t.match(err.message, 'try again', 'not telling you the secret that easily are we?')
  })
})

t.test('birthday (yup)', (t) => {
  t.plan(1)

  const RealDate = Date
  const consoleLog = console.log
  t.teardown(() => {
    global.Date = RealDate
    console.log = consoleLog
  })

  class FakeDate extends Date {
    getUTCMonth () {
      return 8
    }

    getUTCDate () {
      return 29
    }
  }

  global.Date = FakeDate
  console.log = () => undefined

  const birthday = t.mock('../', {})
  birthday((err) => {
    t.error(err, 'npm birthday')
  })
})
