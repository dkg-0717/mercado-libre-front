const currency = (price) => {
  const currencyPrice = new Intl.NumberFormat('es-ar', { style: 'currency', currency: 'ARS' }).format(price)
  return currencyPrice
}

export default currency