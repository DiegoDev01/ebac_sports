import React from 'react'
import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from './slices/cartSlices'
import { toggleFavorite } from './slices/favoritesSlice'
import type { AppDispatch, RootState } from './store'

export type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

function App() {
  const dispatch = useDispatch<AppDispatch>()
  const itensNoCarrinho = useSelector((state: RootState) => state.cart.items)
  const favoritos = useSelector((state: RootState) => state.favorites.items)

  function adicionarAoCarrinho(produto: Produto) {
    if (itensNoCarrinho.find((p) => p.id === produto.id)) {
      alert('Item já adicionado')
    } else {
      dispatch(addToCart(produto))
    }
  }

  function favoritar(produto: Produto) {
    dispatch(toggleFavorite(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header favoritos={favoritos} itensNoCarrinho={itensNoCarrinho} />
        <Produtos
          favoritos={favoritos}
          favoritar={favoritar}
          adicionarAoCarrinho={adicionarAoCarrinho}
        />
      </div>
    </>
  )
}

export default App
