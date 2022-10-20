const productCost = 30, productPrice = 100, productQuantity = 1000
let productTaxes = (productCost * 20) / 100
let productProfit = (productPrice - productCost - productTaxes) * productQuantity

if (productCost < 0 || productPrice < 0) {
    console.log(`ERROR: Product price and/or product cost can't be negative.`)
}

console.log(`The profit from sales is ${productProfit}.`)