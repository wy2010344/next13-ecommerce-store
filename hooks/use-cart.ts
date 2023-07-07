import { Product } from '@/type';
import type { FC } from 'react';
import { toast } from 'react-hot-toast';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware'
interface CartStore {
  items: Product[],
  addItem(data: Product): void
  removeItem(id: string): void
  removeAll(): void
}
const useCart = create(
  persist<CartStore>((set, get) => {
    return {
      items: [],
      addItem(data) {
        const currentItems = get().items
        const existingItem = currentItems.find(item => item.id == data.id)
        if (existingItem) {
          return toast("Item already in cart.")
        }
        set({
          items: [
            ...get().items,
            data
          ]
        })
        toast.success("Item added to cart.")
      },
      removeItem(id) {
        set({
          items: [
            ...get().items.filter(item => item.id != id)
          ]
        })
        toast.success("Item removed from the cart")
      },
      removeAll() {
        set({
          items: []
        })
      },
    }
  }, {
    name: "cart-storate",
    storage: createJSONStorage(() => localStorage)
  })
)

export default useCart;
