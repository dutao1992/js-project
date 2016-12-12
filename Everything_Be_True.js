function every(collection, pre) {
  // Is everyone being true?
  return collection.every(function hasPre(element, index, array) {
  return element[pre];
});
}

every([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
