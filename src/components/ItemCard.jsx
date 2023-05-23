import { useNavigate } from "react-router-dom";
import FreeShipping from '../assets/images/ic_shipping.png'
import currency from '../utils/currency';
import '../assets/css/itemCard.css'

const ItemCard = ({ product }) => {

  const navigate = useNavigate();

  if (!product) return null

  const goToPage = (id) => {
    navigate(`/items/${id}`);
  }

  return (
    <div className='itemcard-container' onClick={() => goToPage(product.id)}>
      <div className="product-image">
        <img className='prod-image' src={product?.picture} alt="imágen del producto" />
      </div>
      <div className="product-description">
        <div className="product-description-info">
          <p className='product-price'> {currency(product.price.amount)}</p> <img src={FreeShipping} />
        </div>
        <p className='product-title'>{product.title}</p>
      </div>
      <div className="product-state">
        <p className='txt-product-state'>{product.seller_address}</p>
      </div>
    </div>
  )
}

export default ItemCard