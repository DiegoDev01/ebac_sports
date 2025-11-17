import { configureStore } from '@reduxjs/toolkit'
import cartReducer from '../slices/cartSlices'
import favoritesReducer from '../slices/favoritesSlice'
import { api } from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    favorites: favoritesReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
