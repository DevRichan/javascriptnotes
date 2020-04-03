const person = {
    name: 'DevRichan',
    age : 22,

    greet(){
        console.log('Hi im '+this.name + 'and my age is '+this.age);
    }
}

//method one
const printName= ({name,age}) => {
    console.log(name,age);
}

printName(person);

//method 2
const {name,age} = person;
console.log(name,age);