import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface FavoriteItem {
    id: number
    nome: string
    preco: number
    imagem: string
}

interface FavoritesState {
    items: FavoriteItem[]
}

const initialState: FavoritesState = {
    items: []
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        toggleFavorite: (state, action: PayloadAction<FavoriteItem>) => {
            const exists = state.items.find((i) => i.id === action.payload.id)
            if (exists) {
                state.items = state.items.filter((i) => i.id !== action.payload.id)
            } else {
                state.items.push(action.payload)
            }
        },
        addFavorite: (state, action: PayloadAction<FavoriteItem>) => {
            if (!state.items.find((i) => i.id === action.payload.id)) {
                state.items.push(action.payload)
            }
        },
        removeFavorite: (state, action: PayloadAction<number | string>) => {
            state.items = state.items.filter((i) => i.id !== action.payload)
        }
    }
})

export const { toggleFavorite, addFavorite, removeFavorite } =
    favoritesSlice.actions
export default favoritesSlice.reducer
