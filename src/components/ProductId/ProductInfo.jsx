import { useState } from "react"

const ProductInfo = ({ product }) => {

  const [quantity, setquantity] = useState(1)

  const handleAdd = () => setquantity(state => state + 1)

  const handleMin = () => {
    if (quantity - 1 >= 1) {
      setquantity(state => state - 1)
    }
  }



  return (
    <article>
      <h3>{product?.brand}</h3>
      <h2>{product?.title}</h2>
      <p>{product?.description}</p>
      <footer>
        <ul>
          <li>
            <span>Price</span>
            <span>{product?.price}</span>
          </li>
          <li>
            <span>Quantity</span>
            <div>
              <div onClick={handleMin}>-</div>
              <div>{quantity}</div>
              <div onClick={handleAdd}>+</div>
            </div>
          </li>
        </ul>
        <button>
          Add to cart
          <i className='bx bx-cart'></i>
        </button>
      </footer>
    </article>
  )
}

export default ProductInfo