import React from 'react'
import ProdutoComponent from '../components/Produto'
import { useGetProductsQuery } from '../services/api'
import * as S from './styles'

type Produto = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type Props = {
  favoritos: Produto[]
  favoritar: (p: Produto) => void
  adicionarAoCarrinho: (p: Produto) => void
}

const Produtos = ({ favoritos, favoritar, adicionarAoCarrinho }: Props) => {
  const { data: produtosApi, isLoading, isError } = useGetProductsQuery()

  if (isLoading) return <p>Carregando produtos...</p>
  if (isError) return <p>Erro ao carregar produtos.</p>

  const produtos: Produto[] = (produtosApi || []).map((p: any) => ({
    id: Number(p.id),
    nome: p.title || '',
    preco: p.price || 0,
    imagem: p.image || ''
  }))

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <ProdutoComponent
          key={produto.id}
          produto={produto}
          aoComprar={adicionarAoCarrinho}
          favoritar={favoritar}
          estaNosFavoritos={favoritos.some((f) => f.id === produto.id)}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
