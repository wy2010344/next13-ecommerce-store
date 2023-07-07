import { Billboard } from "@/type"

const url = `${process.env.NEXT_PUBLIC_API_URL}/billboards`
export default async function getBillboards(id: string) {
  const res = await fetch(url + '/' + id)
  return res.json() as Promise<Billboard>
}