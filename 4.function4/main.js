function countWords(message){
  // wirte your code here
  let reg = /[\s,\.]+/g
  message = message.replace(reg, " ").trim()
  console.log(message)
  let count = message.split(" ").length
  return count;
}
countWords('Good morning, I love JavaScript.');