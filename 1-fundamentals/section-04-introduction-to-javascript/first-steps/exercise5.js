const angle1 = 30, angle2 = 90, angle3 = 60
let isTriangle = false

if (angle1 > 0 && angle2 >0 && angle3 > 0) {
    if (angle1 + angle2 + angle3 == 180) {
        isTriangle = true
        return console.log(isTriangle)
    } else {
        return console.log(isTriangle)
    }
} else {
    return console.log(`One of the angles is invalid.`)
}