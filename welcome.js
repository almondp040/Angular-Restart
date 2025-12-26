//Welcome to JS where we can make literally anything using what we currently know! 
const letters = "ABCDEFGHIJKLMNOP"; 

const createPassword = (toStringNum, start, end) =>{

  return Math.random().toString(toStringNum).slice(start, end); 

}; 

console.log(createPassword(36, 2, 15));

//Now we can use this wherever!

const writeACool = async (url)=> {
 try {
  response = await fetch(url); 
  if (!response.ok) {
    throw new Error(`HTTP Error status: ${response.status}`);
  }

  const data = response.json(); 
  console.log(data); 
  return data; 

 } catch (error) {
  console.log(`Error was thrown: ${error}`); 

 }
};

writeACool("https://mdn.github.io/shared-assets/images/examples/round-balloon.png").then((data)=>{

console.log(`What to do with this data? ${data}`); 


}); 


nowLive = (name, age, DOB) =>{

  const script = `Now let ${name}, live on until ${age}, and his ${DOB}`; 
  return script; 

}

const almondLives = nowLive('Almond', 30, "10/01/1995");

console.log("Here's my function: ", almondLives); 


class TextForAlmondLives {
  constructor(name, age, DOB) {
    this.name = name; 
    this.age = age; 
    this.DOB = DOB; 
  }



  nowLive(){
    const script = `Now let ${this.name}, live on until ${this.age}, and his ${this.DOB}`; 
    return script; 
  }
}; 


const almondSays = new TextForAlmondLives('Almond', 30, "10/01/1995"); 
console.log("Here's my class: ", almondSays.nowLive());

export default TextForAlmondLives;