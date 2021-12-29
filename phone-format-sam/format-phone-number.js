/**
 * Formats a ten-digit US phone number.
 * 
 * @param {string} input  the unformatted phone number
 * @returns {string} the formatted number
 * @throws {RangeError} if the input cannot be formatted 
 */
const formatPhoneNumber = (input) => {
  if (input.length != 10)
    throw new RangeError(`Bad format ${input}`)
  else
    return input.slice(0, 3) + '-' +
      input.slice(3, 6) + '-' +
      input.slice(6)
}

module.exports = formatPhoneNumber