let academicStatus = 'approved'
let result = '?'

switch (academicStatus) {
    case 'approved':
        result = `Congratulations, you've been approved!`
        break
    case 'list':
        result = `You're on the waiting list.`
        break
    case 'failed':
        result = `You've failed.`
        break
    default:
        console.log(`Incorrect information`)
        break
}

console.log(result)