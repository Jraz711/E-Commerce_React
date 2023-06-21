import { useSelector } from 'react-redux';
import CardProduct from '../components/home/CardProduct';

const Home = () => {

  const products = useSelector(state => state.products)

  console.log(products);

  return (
    <div>
      <h1 className="text-center">Home</h1>
      <div>
        {
          products?.map(product => (
            <CardProduct
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Home