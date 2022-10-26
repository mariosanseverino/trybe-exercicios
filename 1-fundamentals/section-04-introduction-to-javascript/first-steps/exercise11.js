const userBruteSalary = 3000
let userINSS = 0, userIR = 0, userLiquidSalary = 0

if (userBruteSalary <= 1556.94) {
    userINSS = userBruteSalary * 8 / 100
} else if (userBruteSalary > 1556.94 && userBruteSalary <= 2594.92) {
    userINSS = userBruteSalary * 9 / 100
} else if (userBruteSalary > 2594.93 && userBruteSalary <= 5189.82) {
    userINSS = userBruteSalary * 11 / 100
} else {
    userINSS = 570.88
}

let userSalaryPostINSS = userBruteSalary - userINSS

if (userSalaryPostINSS <= 1903.98) {
    userIR = 0
} else if (userSalaryPostINSS > 1903.99 && userSalaryPostINSS <= 2826.65) {
    userIR = (userSalaryPostINSS * 7.5) / 100 - 142.8
} else if (userSalaryPostINSS > 2826.66 && userSalaryPostINSS <= 3751.05) {
    userIR = (userSalaryPostINSS * 15) / 100 - 354.8
} else if (userSalaryPostINSS > 3751.06 && userSalaryPostINSS <= 4664.68) {
    userIR = (userSalaryPostINSS * 22.5) / 100 - 636.13
} else {
    userIR = (userSalaryPostINSS * 27.5) / 100 - 869.36
}

userLiquidSalary = userSalaryPostINSS - userIR
console.log(userLiquidSalary)