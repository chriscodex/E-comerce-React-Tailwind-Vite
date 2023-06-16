/**
 * This function calculates the total price of a new order
 * @param {Array} products cartProduct: array of objects
 * @returns {number} Total price
 */
const TotalPrice = (products) => {
  return products.reduce((sum, product) => sum + product.price, 0)
}

export { TotalPrice }