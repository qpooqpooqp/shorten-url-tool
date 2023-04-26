let shortenCodes = []
function shortenCodeGenerator(){
  let elements = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let code = ''

  for(let i =0; i < 5; i++){
    code += elements.charAt(Math.floor(Math.random() * 62))
  }
  if(shortenCodes.indexOf(code) > 0){
    return shortenCodeGenerator()
  } else {
    shortenCodes.push(code)
    return code
  }
}
module.exports = shortenCodeGenerator