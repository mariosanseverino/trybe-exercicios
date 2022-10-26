let engineStatus = `on`

const carEngine = () => (engineStatus === `off` ? engineStatus = `on` : engineStatus = `off`)

console.log(`The car engine is now ${carEngine()}`)