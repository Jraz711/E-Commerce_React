import './styles/CardProduct.css'

const CardProduct = ({ product }) => {

  return (
    <article className="product">
      <header className="product_header">
        <div className='product_img-container'>
          <img className="product_img" src={product.images[0].url} alt="" />
        </div>
        <div className='product_img-container'>
          <img className="product_img" src={product.images[1].url} alt="" />
        </div>

      </header>
      <section className="product_body">
        <h3 className="product_brand">{product.brand}</h3>
        <h2 className="product_title">{product.title}</h2>

        <article className="product_price">
          <h4 className="product_price-label">Price</h4>
          <h3 className="product_price-value">$ {product.price}</h3>
        </article>
        <button className="product_btn">
          <i className='bx bx-cart'></i>
        </button>
      </section>
    </article>
  )
}

export default CardProduct