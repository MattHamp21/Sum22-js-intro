// TDD Test
// num1,num2 paramaters
const add = (num1,num2)=>{
  return num1 + num2
};

const callFunc = (foo) => {
  return foo(1,1)
};

const minus = (num1,num2)=>{
  return num1 - num2
};
//expecting this functon to be given a sting of words seprate by commas
//it should return the number of words



// old way of doing things
module.exports = {
  add
};

function wordCount(words) {
  if(words === ''){
    return 0
  }

  let wordArray = word.split('');
return wordArray.length;
};