//Welcome to JS where we can make literally anything using what we currently know! 
const letters = "ABCDEFGHIJKLMNOP"; 

const createPassword = (toStringNum, start, end) =>{

  return Math.random().toString(toStringNum).slice(start, end); 

}; 

console.log(createPassword(36, 2, 15));

//Now we can use this wherever!

