/* eslint-disable max-len */
// happy birthday! 🎂

module.exports = callback => {
  const today = new Date()
  let untilBirthday = new Date(`${today.getFullYear()}-09-29`) - today
  if (untilBirthday < 0) {
    untilBirthday = new Date(`${today.getFullYear() + 1}-09-29`) - today
  }

  if (today.getUTCDate() !== 29 || today.getUTCMonth() !== 8) {
    return callback(new Error(`Please try again in ${untilBirthday}ms`))
  } else {
    return callback(null, console.log('\n' +
      '🎊 🎈 🎊 🎈 🎊 🎈 🎊 🎈 🎊 🎈 🎊\n' +
      '\n' +
      '        ▓▓▓▓\n' +
      '       ▓▓▓▓ ▓\n' +
      '      ▓▓▓▓▓▓▓▓\n' +
      '      ▓▓▓▓▓▓▓▓\n' +
      '       ▓▓▓▓ ▓\n' +
      '        ▓▓▓▓     ▓▓▓▓\n' +
      '         ●      ▓▓▓▓ ▓\n' +
      '          ●    ▓▓▓▓▓▓▓▓\n' +
      '          ●    ▓▓▓▓▓▓▓▓\n' +
      '         ●      ▓▓▓▓ ▓\n' +
      '          ●      ▓▓▓▓\n' +
      '           ●       ●      ████\n' +
      '                    ●    ██████\n' +
      '                   ●    ██████ █\n' +
      '                        ████████\n' +
      '             🔥          ████ █\n' +
      '         🔥  ▒▒  🔥       ████▌\n' +
      '         ▒▒  ▒▒  ▒▒        ♥\n' +
      '         ▒▒  ▒▒  ▒▒      ♥\n' +
      '         ▒▒  ▒▒  ▒▒     ♥\n' +
      '       ██████████████ ♥\n' +
      '       ▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n' +
      '       ██████████████\n' +
      '       ▓▓▓▓▓▓▓▓▓▓▓▓▓▓\n' +
      '     ██████████████████\n' +
      '    ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\n' +
      '\n' +
      '🎉 🎈 🎉 🎈 🎉 🎈 🎉 🎈 🎉 🎈 🎉\n' +
      '\n' +
      'HAPPY BIRTHDAY, npm!\n' +
      'https://github.com/npm/cli/commit/4626dfa73\n' +
      '\n' +
      '🎊 🎈 🎊 🎈 🎊 🎈 🎊 🎈 🎊 🎈 🎊\n'))
  }
}
