//foreach

[1, 2, 3].forEach(function(item, index) {
    console.log(item, index)
})
console.log("--------------------------------------")

//map
const three = [1, 2, 3]
const doubled = three.map(function(item) {
    return item * 2
})
console.log(doubled)
console.log("--------------------------------------")

//filter
const ints = [1, 2, 3]
const evens = ints.filter(function(item) {
    return item % 2 === 0
})
console.log(evens)
console.log("--------------------------------------")


//reduce
const sum = [1, 2, 3].reduce(function(result, item) {
    return result + item
}, 0)
console.log(sum)
console.log("--------------------------------------")

//some
const hasNegativeNumbers = [1, -2, 3, 2, 4].some(function(item) {
    return item < 0
})
console.log(hasNegativeNumbers)
console.log("--------------------------------------")


//every
const allPositiveNumbers = [-1, 3, 2, 4].every(function(item) {
    return item > 0
})
console.log(allPositiveNumbers)

//find
console.log("--------------------------------------")
const objects = [{ id: "a" }, { id: "b" }, { id: "c" }]
const found = objects.find(function(item) {
    return item.id === "b"
})
console.log(found);


//find index
console.log("--------------------------------------")
const objects2 = [{ id: "a" }, { id: "b" }, { id: "c" }]
const foundIndex = objects2.findIndex(function(item) {
    return item.id === "c"
})
console.log(foundIndex);



/*
output
*

1 0
2 1
3 2  foreach(item,index)
--------------------------------------
[ 2, 4, 6 ] map
--------------------------------------
[ 2 ] filter
--------------------------------------
6 reduce
--------------------------------------
true some
--------------------------------------
false every
--------------------------------------
{ id: 'b' } find
--------------------------------------
2 findIndex

*
*
* */
