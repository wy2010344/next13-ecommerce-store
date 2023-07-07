import { Product } from "@/type"
import qs from 'query-string'

const url = `${process.env.NEXT_PUBLIC_API_URL}/products`
export default async function getProducts(query: {
  categoryId?: string
  colorId?: string
  sizeId?: string
  isFeatured?: boolean
}) {
  const turl = qs.stringifyUrl({
    url,
    query,
  })
  const res = await fetch(turl)
  return res.json() as Promise<Product[]>
}