// Types of loops
// 1. for loop
// 2. while loop

for (let i=1; i<=10; i++){
    console.log(i)
}

let a=''
for (let i=1; i<=5; i++){
    a = a + i + ' '
}
console.log(a)

console.log('----------------------------')

let  count = 0
while (count<=5){
    console.log("count :" + count)
    count++
}

let fruits = ['Apple', 'Banana', 'Mango', 'Orange', 'Pineapple']
for (let i=0; i<fruits.length; i++){
    console.log(fruits[i])
}

// Calculate the sum of all given numbers in an array
let numbers = [10, 20, 30, 40, 50]
let sum = 0
for (let i=0; i<numbers.length; i++){
    sum = sum + numbers[i]
}
console.log("Sum of all numbers: " + sum)
