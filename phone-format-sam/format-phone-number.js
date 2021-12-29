const formatPhoneNumber = (input) => {
    console.log(`Received input ${input}`)
    if (input.length != 10) throw new RangeError(`Bad format ${input}`)
    else return input.slice(0, 3) + '-' + input.slice(3, 6) + '-' + input.slice(6)
  }
  
module.exports = formatPhoneNumber
  
