function reverseString(message) {
    // wirte your code here
    message = message + ""
    var str =  message.split('').reverse().join('');
    return str;
}

console.log(reverseString("Hello"));
