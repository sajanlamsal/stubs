//spread operator
const person = {

    name: "Robinson",
    age: 29,

    greet() {

        console.log("Hi, I am " + this.name)
    },

}

const objectCopy = { ...person }
console.log(objectCopy)
const hobbies = ["sports", "cooking"]
const copy = [...hobbies, "swimming"]
console.log(copy)

//rest operator || variable length args

const toArray = (arg1, arg2, arg3) => [arg1, arg2, arg3]
console.log(toArray(1, 2, 3))

const varArgs = (...args) => args

console.log(varArgs(4, 5, 6, 7, 8))
