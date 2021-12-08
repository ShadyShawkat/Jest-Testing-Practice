const stringLength = (string) => {
  if(string.length < 1 || string.length > 10) {
    throw new Error("string length can't be smaller than 1 character or longer than 10 characters");
  }
  return string.length;
};


const reverseString = (string) => {
  return string.split('').reverse().join('');
};

module.exports = {stringLength, reverseString,}