import axios from 'axios'

const localUrl = 'https://mercadolibreback-dkg0717.b4a.run'

const getProductsByName = async (productName) => {
  const options = {
    params: {
      q: productName
    }
  }
  try {
    const { data } = await axios.get(`${localUrl}/api/items`, options)
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(data.data)
      }, 3000)
    })
  } catch (err) {
    return err
  }
}

const getProductById = async (productId) => {
  try {
    const { data } = await axios.get(`${localUrl}/api/items/${productId}`)
    return data.product
  } catch (err) {
    return err
  }
}

export {
  getProductsByName,
  getProductById
}