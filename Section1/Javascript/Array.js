let fruits= ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple', 'Grapes', 'Watermelon', 'Kiwi', 'Papaya', 'Guava']
console.log(fruits)

// Array Methods
console.log('-------------------')
// 1. push() - add element at the end of the array
// 2. pop() - remove element from the end of the array
// 3. shift() - remove element from the beginning of the array
// 4. unshift() - add element at the beginning of the array
// 5. splice() - add or remove element from the array
// 6. slice() - copy elements from the array
// 7. indexOf() - find the index of the element
// 8. concat() - merge two arrays
// 9. map() - iterate over the array
// 10. filter() - filter the elements of the array
// 11. forEach() - iterate over the array

console.log(fruits[4])
console.log(fruits.length)
console.log(fruits[6])
console.log(fruits.slice(2,7))

fruits.push('Strawberry')
console.log(fruits)

fruits.pop()
console.log(fruits)

fruits.shift()
console.log(fruits)

fruits.unshift('Apple')
console.log(fruits)

let veg = ['Potato', 'Tomato', 'Onion', 'Carrot', 'Cabbage']
let newArray = veg.concat(fruits)
console.log(newArray)

let index = fruits.indexOf('Mango')
console.log(index)

console.log('--------------------')
let nums = [1,2,3,4,5,6,7,8,9,10]

// Iteration using loop
for (let i=0; i<nums.length; i++){
    console.log(nums[i]**2)
}

// Iteration using forEach
nums.forEach((i) => {
    console.log(i**2)
})

// Iteration using map
let square = nums.map((x) => x**2)
console.log(square)

// filter function
let evenNum = []
for (let i=0; i<nums.length; i++){
    if (i%2==0){
        evenNum.push(i)
    }
}
console.log(evenNum)

let even = nums.filter((x) => x%2==0)
console.log(even)

let odd = nums.filter((x) => x%2!=0)
console.log(odd)

let color = ['Red', 'Green', 'Blue', 'Yellow', 'Pink', 'Black', 'White', 'Orange', 'Purple', 'Brown']
let newColor = color.filter((x) => x.length>4)
console.log(newColor)