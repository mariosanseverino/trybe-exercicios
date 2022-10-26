const studentGrade = 49
let studentResult = ''

if (studentGrade < 0 || studentGrade > 100) {
    console.log(`Student grade is invalid. Please, try again.`)
} else {
    if (studentGrade >= 90) {
        studentResult = 'A'
        console.log(studentResult)
    } else if (studentGrade >= 80) {
        studentResult = 'B'
        console.log(studentResult)
    } else if (studentGrade >= 70) {
        studentResult = 'C'
        console.log(studentResult)
    } else if (studentGrade >= 60) {
        studentResult = 'D'
        console.log(studentResult)
    } else if (studentGrade >= 50) {
        studentResult = 'E'
        console.log(studentResult)
    } else if (studentGrade < 50) {
        studentResult = 'F'
        console.log(studentResult)
    }
}