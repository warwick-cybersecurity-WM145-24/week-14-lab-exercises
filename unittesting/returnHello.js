
const generateHelloString = (language = "english") => {
  switch (language) {
    case "english":
      return "Hello";
      break;
    case "gurmukhi":
      return "ਸਤਿ ਸ੍ਰੀ ਅਕਾਲ";
      break;
    default:
      throw RangeError(`Unknown language ${language}`);
  }
}

module.exports={generateHelloString}
