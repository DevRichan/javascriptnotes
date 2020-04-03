const person = {
    name : 'DevRichan',
    age : 21,

    greet() {
        console.log('Hi im '+this.name+' and my age is '+this.age);
    }
}

person.greet();

const hobbies = ['Sports','Cooking'];

// view array method one
for (let i of hobbies){
    console.log(i);
}

//using for object and array
const copiedPerson = {...person}
console.log(copiedPerson);

// //method 2
// console.log(hobbies);
// //methode 3
// console.log(hobbies.map( i => 'Hobby : ' + i));

// add new value array hobies
// hobbies.push('programming')

// const copiedArray = hobbies.slice();
//array in array
// const copiedArray = [hobbies];
const copiedArray = [...hobbies];
console.log(copiedArray);


// array one just view if input value at function
const toArray = (arg1,arg2,arg3) => {
    return[arg1,arg2,arg3];
}

// (...arg) is operator spread
const toArray2 = (...args) => {
    return (args);
}

console.log(toArray2(2,4,3,4,5,3,321,3,4,'uwuw'))


