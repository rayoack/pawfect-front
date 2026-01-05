'use client'
import React, { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import ProtectedRoute from '@/components/Auth/ProtectedRoute'
import { useFavoritesStore } from '@/store/favoritesStore'
import { useCartStore } from '@/store/cartStore'
import toast from 'react-hot-toast'
import * as Icon from "@phosphor-icons/react/dist/ssr"

const FavoritosPage = () => {
    const { favorites, loading, fetchFavorites, removeFavorite } = useFavoritesStore()
    const { addItem } = useCartStore()

    useEffect(() => {
        fetchFavorites()
    }, [fetchFavorites])

    const handleRemoveFavorite = async (productId: string) => {
        try {
            await removeFavorite(productId)
            toast.success('Removido dos favoritos')
        } catch (error) {
            toast.error('Erro ao remover favorito')
        }
    }

    const handleAddToCart = async (productId: string) => {
        try {
            await addItem(productId, 1)
            toast.success('Produto adicionado ao carrinho!')
        } catch (error) {
            toast.error('Erro ao adicionar ao carrinho')
        }
    }

    return (
        <ProtectedRoute>
            <>
                <TopNavOne props="style-one bg-primary-blue-deep" slogan="Seus produtos favoritos!" />
                <div id="header" className='relative w-full'>
                    <MenuOne props="bg-transparent" />
                    <Breadcrumb heading='Meus Favoritos' subHeading='Favoritos' />
                </div>
                <div className="favoritos-page md:py-20 py-10">
                    <div className="container">
                        <div className="heading4 mb-8">Meus Favoritos</div>

                        {loading ? (
                            <div className="text-center py-20">
                                <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary-blue-deep"></div>
                                <p className="mt-4 text-secondary">Carregando favoritos...</p>
                            </div>
                        ) : favorites.length === 0 ? (
                            <div className="text-center py-20">
                                <Icon.Heart size={64} className="mx-auto text-secondary2 mb-4" />
                                <p className="heading5 mb-4">Você ainda não tem produtos favoritos</p>
                                <p className="text-secondary mb-8">
                                    Adicione produtos aos favoritos para encontrá-los facilmente depois!
                                </p>
                                <Link
                                    href="/shop/breadcrumb1"
                                    className="button-main bg-primary-blue-deep hover:bg-primary-blue-vibrant inline-block"
                                >
                                    Explorar Produtos
                                </Link>
                            </div>
                        ) : (
                            <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
                                {favorites.map((fav: any) => {
                                    const product = fav.product?.attributes
                                    if (!product) return null

                                    const imageUrl = product.imagens?.data?.[0]?.attributes?.url
                                    const price = product.precoPromocional || product.preco
                                    const hasDiscount = product.precoPromocional && product.precoPromocional < product.preco

                                    return (
                                        <div key={fav.id} className="product-item relative bg-white rounded-lg shadow-sm hover:shadow-md transition">
                                            {/* Badge de Promoção */}
                                            {hasDiscount && (
                                                <div className="absolute top-3 left-3 z-10 bg-red text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                    SALE
                                                </div>
                                            )}

                                            {/* Botão Remover Favorito */}
                                            <button
                                                onClick={() => handleRemoveFavorite(fav.productId)}
                                                className="absolute top-3 right-3 z-10 bg-white p-2 rounded-full shadow hover:bg-red hover:text-white transition"
                                                title="Remover dos favoritos"
                                            >
                                                <Icon.Heart size={20} weight="fill" className="text-red" />
                                            </button>

                                            {/* Imagem do Produto */}
                                            <Link href={`/product/default?id=${fav.productId}`} className="block">
                                                <div className="aspect-square relative overflow-hidden rounded-t-lg">
                                                    {imageUrl ? (
                                                        <Image
                                                            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${imageUrl}`}
                                                            alt={product.titulo}
                                                            fill
                                                            className="object-cover hover:scale-110 transition duration-500"
                                                        />
                                                    ) : (
                                                        <div className="w-full h-full bg-surface flex items-center justify-center">
                                                            <Icon.Image size={48} className="text-secondary2" />
                                                        </div>
                                                    )}
                                                </div>
                                            </Link>

                                            {/* Informações do Produto */}
                                            <div className="p-4">
                                                <Link href={`/product/default?id=${fav.productId}`}>
                                                    <h3 className="font-semibold text-base line-clamp-2 hover:text-primary-blue-vibrant transition">
                                                        {product.titulo}
                                                    </h3>
                                                </Link>

                                                <div className="flex items-center gap-2 mt-2">
                                                    <span className="text-lg font-bold text-primary-blue-deep">
                                                        R$ {price?.toFixed(2)}
                                                    </span>
                                                    {hasDiscount && (
                                                        <span className="text-sm text-secondary2 line-through">
                                                            R$ {product.preco?.toFixed(2)}
                                                        </span>
                                                    )}
                                                </div>

                                                {product.estoque > 0 ? (
                                                    <button
                                                        onClick={() => handleAddToCart(fav.productId)}
                                                        className="w-full mt-4 button-main bg-accent-orange-intense hover:bg-accent-orange-medium"
                                                    >
                                                        Adicionar ao Carrinho
                                                    </button>
                                                ) : (
                                                    <div className="w-full mt-4 py-3 text-center bg-surface text-secondary2 rounded-lg">
                                                        Fora de Estoque
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )
                                })}
                            </div>
                        )}
                    </div>
                </div>
                <Footer />
            </>
        </ProtectedRoute>
    )
}

export default FavoritosPage
