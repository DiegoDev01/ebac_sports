import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartItem {
  id: number
  nome: string
  preco: number
  imagem: string
}

interface CartState {
  items: CartItem[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      if (!state.items.find((i) => i.id === action.payload.id)) {
        state.items.push(action.payload)
      }
    },
    removeFromCart: (state, action: PayloadAction<number | string>) => {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions
export default cartSlice.reducer
