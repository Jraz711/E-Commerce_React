import { useNavigate } from 'react-router-dom'
import './styles/CardProduct.css'

const CardProduct = ({ product }) => {

  const Navigate = useNavigate()

  const handleNavigateDetail = () => {
    Navigate(`/product/${product.id}`)
  }

  const handleAddCart = e => {
    e.stopPropagation()

    alert('Agregado al Carrito')
  }

  return (
    <article className="product" onClick={handleNavigateDetail}>
      <header className="product_header">
        <div className='product_img-container'>
          <img className="product_img" src={product.images[0].url} alt="" />
        </div>
        <div className='product_img-container'>
          <img className="product_img" src={product.images[1].url} alt="" />
        </div>
      </header>
      <section className="product_body">
        <header className='product-titles'>
          <h3 className="product_brand">{product.brand}</h3>
          <h2 className="product_title">{product.title}</h2>
        </header>
        <article className="product_price">
          <h4 className="product_price-label">Price</h4>
          <h3 className="product_price-value">$ {product.price}</h3>
        </article>
        <button className="product_btn" onClick={handleAddCart}>
          <i className='bx bx-cart'></i>
        </button>
      </section>
    </article>
  )
}

export default CardProduct