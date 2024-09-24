import getAllProducts from '@/services/products/get-all-products'
import { ApiContext } from '@/types'
import HomePage from '@/components/templates/Home'


export default async function Home() {
  const context: ApiContext = {
    apiRootUrl: process.env.API_BASE_URL || 'http://localhost:5000',
  }
  // 각 상품의 톱 6개를 얻어, 정적 페이지를 작성
  // 60초 동안 revalidate 상태로 하고, 정적 페이지를 업데이트한다
  const [clothesProducts, bookProducts, shoesProducts] = await Promise.all([
    getAllProducts(context, { category: 'clothes', limit: 6, page: 1 }),
    getAllProducts(context, { category: 'book', limit: 6, page: 1 }),
    getAllProducts(context, { category: 'shoes', limit: 6, page: 1 }),
  ])

  return <HomePage
    clothesProducts={clothesProducts}
    bookProducts={bookProducts}
    shoesProducts={shoesProducts}
  />
}
