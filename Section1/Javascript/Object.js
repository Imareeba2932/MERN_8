let student = {
    name: 'John',
    age: 25,
    email: 'john123@gmail.com',
    phone: '1234567890',
    course: 'Javascript',
}
console.log(student)
// to access value of key
console.log(student.name)
console.log(student['name'])

// replace value
student.course = 'Python'
console.log(student)

// add new key-value pair
student.city = 'New York'
console.log(student)

console.log('------------------')

const smartphones = {
    brand: 'Samsung',
    model: 'Galaxy S10',
    price: 50000,
    color: ['White', 'Black', 'Blue', 'Green', 'Red'],
    ram: '8GB',
    storage: '128GB',
    camera: '48MP',
    battery: '4000mAh',
}
 console.log(smartphones)
 console.log(smartphones.color[2])
 smartphones.color[2] = "skyblue"
console.log(smartphones)

console.log('------------------')

const phones = [
    {brand:'Apple', model:'iPhone 11', price: 70000, color: ['White', 'Black', 'Green', 'Red']},
    {brand:'Samsung', model:'Galaxy S10', price: 50000, color: ['White', 'Black', 'Blue', 'Green', 'Red']},
    {brand:'OnePlus', model:'8T', price: 45000, color: ['White', 'Black', 'Blue', 'Green']},
    {brand:'Xiaomi', model:'Mi 10', price: 40000, color: ['White', 'Black', 'Blue', 'Green', 'Red']},
]
console.log(phones[1].model)
console.log(phones[1].color[2])
phones[2].model = '8T Pro'
console.log(phones)
