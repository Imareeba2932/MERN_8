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