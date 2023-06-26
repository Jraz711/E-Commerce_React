import { useEffect } from "react"
import { useParams } from "react-router-dom"
import ProductInfo from "../components/ProductId/ProductInfo"
import SimilarProducts from "../components/ProductId/SimilarProducts"
import useFetch from "../hooks/useFetch"

const ProductIdPage = () => {

  const { id } = useParams()

  const baseUrl = `https://e-commerce-api-v2.academlo.tech/api/v1/`
  const [product, getPrductById] = useFetch(baseUrl)

  useEffect(() => {
    getPrductById(`/products/${id}`)
  }, [id])

  return (
    <div>
      <ProductInfo
        product={product}
      />
      <SimilarProducts />
    </div>
  )
}

export default ProductIdPage