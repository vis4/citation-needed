var exp = /(officials?[^\.,]*? sa(?:y|id)|according to[^\.,]*? officials?|(said) (?:an?|the)[^\.,]*? officials?|condition of anonymity)/g;

module.exports = function detect(str) {
  return str.match(exp);
};

