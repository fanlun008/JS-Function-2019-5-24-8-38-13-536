function palindrome(message) {
  // wirte your code here
  var len = str.length;
  for (var i = 0; i < len / 2; i++) {
    if (str.charAt(i) != str.charAt(len - 1 - i)) {
      return false;
    }
  }
  return true;
}

palindrome('hello'); // should return false
palindrome('abcba'); // should return true