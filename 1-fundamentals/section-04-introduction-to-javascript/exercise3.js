const a = 61, b = 16, c = 33

if (a > b && a > c) {
    console.log(`A(${a}) is bigger than B(${b}) and C(${c}).`)
} else if (b > a && b > c) {
    console.log(`B(${b}) is bigger than A(${a}) and C(${c}).`)
} else {
    console.log(`C(${c}) is bigger than A(${a}) and B(${b})`)
}