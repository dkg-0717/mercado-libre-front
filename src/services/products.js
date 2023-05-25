import axios from 'axios'

// const localUrl = 'https://mercadolibreback-dkg0717.b4a.run'

const localUrl = 'http://localhost:3000'

const getProductsByName = async (productName) => {
  const options = {
    params: {
      q: productName,
      limit: 4
    }
  }
  try {
    const { data } = await axios.get(`${localUrl}/api/items`, options)
    return new Promise(resolve => {
      setTimeout(() => {
        const { data: products } = data
        resolve(products)
      }, 3000)
    })
  } catch (err) {
    return err
  }
}

const getProductById = async (productId) => {
  try {
    const { data } = await axios.get(`${localUrl}/api/items/${productId}`)
    const { product } = data
    return product
  } catch (err) {
    return err
  }
}

export {
  getProductsByName,
  getProductById
}