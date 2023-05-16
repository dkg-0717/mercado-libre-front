import axios from 'axios'

const localUrl = 'http://localhost:3000'

const getProductsByName = async (productName) => {
  const options = {
    params: {
      q: productName
    }
  }
  try {
    const { data } = await axios.get(`${localUrl}/api/items`, options)
    return data.data
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