var names = "Sharath"
var age = 20;
var n = "dsdsd";
console.log(names);

function details(name,age,n)
{
    return name+" "+age+" "+n;
}

const result = details(names,age,n)
console.log('res '+result);

let tempData = "test";
const tempData2=10;
//tempData2=11;
//arrow functions
const otherDetails = (tempData) =>{
    console.log('result is '+tempData);
}

otherDetails(10);

//objects

let objects = {
    name:"sharath",
    age:20,
    // greet:()=>{
    //     console.log('Hi this is function'+this.age)
    // }
    greet:function(){
        console.log('Hi this is function'+this.age)
    }

}
objects.greet()

//arrays

const hobbies = ["cricket","hockey"];



for(let hobby of hobbies){
    console.log('hobby '+hobby)
    }

const newHobiies = hobbies.map(element => element+"ing")
console.log(newHobiies);

//spread
const newCopiedHobbies = [...hobbies];
console.log(newCopiedHobbies)

//rest
const toArray = (...args) =>{
    return args
}
console.log("rest demo is "+toArray(1,2,3,5))

const personName = (temp) =>{
    console.log(`name is ${temp}`);
}
personName("sharath")

//destructuring
const personDetails = ({name,age}) =>{
    console.log(`name is ${name} and age is ${age}`);
}

personDetails(objects)




