const users = [
    {
      firstName: "Niky",
      lastName: "Morgan",
      favoriteColor: "Blue",
      favoriteAnimal: "Jaguar",
      personalQuote: "You're never too old to learn something new",
    },
    {
      firstName: "Tracy",
      lastName: "Lum",
      favoriteColor: "Yellow",
      favoriteAnimal: "Penguin",
      personalQuote: "I just got lost in thought - it was unfamiliar territory",
    },
    {
      firstName: "Josh",
      lastName: "Rowley",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote: "Always remember you’re unique, just like everyone else",
    },
    {
      firstName: "Kate",
      lastName: "Travers",
      favoriteColor: "Red",
      favoriteAnimal: "Jaguar",
      personalQuote: "Behind every great man is a woman rolling her eyes",
    },
    {
      firstName: "Avidor",
      lastName: "Turkewitz",
      favoriteColor: "Blue",
      favoriteAnimal: "Penguin",
      personalQuote:
        "You don't have to see the whole staircase, just take the first step",
    },
    {
      firstName: "Drew",
      lastName: "Price",
      favoriteColor: "Yellow",
      favoriteAnimal: "Elephant",
      personalQuote:
        "Failure is not the opposite of success: it's part of success",
    },
  ];





// looping method
//   function firstNamePrinter(collection) {
//     for (let user of collection) {
//       console.log(user.firstName);
//     }
//   }
//   firstNamePrinter(users);





users.map(user => console.log(user.firstName==="Drew"))



const newArray = [{name: "nicco", age: 20},{name: "stevo", age: 18},{name: "ericoh", age: 22},{name: "davee", age: 25 }]
 
 const returnAge = item => item.age;
 const returnName = item => item.name
 const age = newArray.map(returnAge)
 const names = newArray.map(returnName)
 
 console.log(names)
 console.log(age)
 
 const combined = []
 combined.push(names, age);
 console.log(combined)
 
 

 function loopThroughAndFind (inventory, finder) {
     let result = null;
     for(let item of inventory) {
         if(finder(item)===true){
             result = item;
             break;
         }
         
     }
     return result;
 }
 
 
 function name(newArray) {
     return newArray.name === "nicco";
 }
 
 
 console.log(loopThroughAndFind(newArray, name));
 
 
 //restock
 
 const belowAge = newArray => newArray.age>18; 
 //return first person who passes through the condition
 console.log(loopThroughAndFind(newArray, belowAge));
 
 console.log("using find method nows")
 
 let found = newArray.find(item=> item.age<20);
 console.log(found)
 
 //find()
 //filter()
 //map()
 //foreach()
//reduce() 
 
 
 