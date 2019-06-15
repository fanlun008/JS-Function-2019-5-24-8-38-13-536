function alphabetSort(message){
  // wirte your code here
  var reg = /^[a-zA-Z]+$/
  if (!reg.test(message)) {
    console.log("输入只能全字母");
    return;
  }
  let newstr = message.split('').sort().join('')
  return newstr;
}
alphabetSort('hello'); // should return 'ehllo'