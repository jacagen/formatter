/* Entrypoint for standalone Docker container. */

var format = require('./format-phone-number.js')

const result = format(process.env.PHONE)
console.error(result)
