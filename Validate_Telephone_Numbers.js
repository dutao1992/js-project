function telephoneCheck(str) {
  // Good luck!
  var reg = /^\d{3}-\d{3}-\d{4}$|^\d{10}$|^\d{3}\s\d{3}\s\d{4}$|^\(\d{3}\)\s?\d{3}-\d{4}$|1\s\d{3}-\d{3}-\d{4}$|^1\s?\(\d{3}\)\s?\d{3}-\d{4}$|1\s\d{3}\s\d{3}\s\d{4}$/;
  return reg.test(str);
}
telephoneCheck("555 555 5555");
