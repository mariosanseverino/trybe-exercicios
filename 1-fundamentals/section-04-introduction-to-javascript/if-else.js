const grade = 81
if (grade > 80) {
    console.log(`Congratulations, you've been approved!`)
} else if (grade < 80 && grade >= 60) {
    console.log(`You're in our waiting list.`)
} else {
    console.log(`You've failed.`)
}