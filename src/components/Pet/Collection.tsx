'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css/bundle';
import { useRouter } from 'next/navigation';

interface CategoryItem {
    id: number
    attributes: {
        nome: string
        slug: string
        descricao?: string
        imagem: {
            data: {
                attributes: {
                    url: string
                }
            }
        }
        ordem: number
        ativa: boolean
    }
}

interface CollectionProps {
    categories: CategoryItem[]
}

const Collection: React.FC<CollectionProps> = ({ categories }) => {
    const router = useRouter()

    const handleCategoryClick = (category: string) => {
        router.push(`/shop/breadcrumb1?category=${category}`);
    };

    // Default categories (fallback se Strapi não tiver dados)
    const defaultCategories = [
        { nome: 'Alimentação', imagem: '/images/collection/food.png', slug: 'pet' },
        { nome: 'Roupas', imagem: '/images/collection/outfit.png', slug: 'pet' },
        { nome: 'Camas', imagem: '/images/collection/bed.png', slug: 'pet' },
        { nome: 'Brinquedos', imagem: '/images/collection/toys.png', slug: 'pet' },
        { nome: 'Suplementos', imagem: '/images/collection/supplements.png', slug: 'pet' },
        { nome: 'Farmácia', imagem: '/images/collection/pharmacy.png', slug: 'pet' },
        { nome: 'Coleiras', imagem: '/images/collection/ring.png', slug: 'pet' }
    ]

    // Use Strapi categories if available
    const displayCategories = categories.length > 0
        ? categories
            .filter(c => c.attributes.ativa)
            .sort((a, b) => a.attributes.ordem - b.attributes.ordem)
        : null;

    return (
        <>
            <div className="trending-block style-six md:pt-20 pt-10">
                <div className="container">
                    <div className="heading3 text-center">Compre por Categorias
                    </div>
                    <div className="list-trending section-swiper-navigation style-small-border style-outline md:mt-10 mt-6">
                        <Swiper
                            spaceBetween={12}
                            slidesPerView={2}
                            navigation
                            loop={true}
                            modules={[Navigation, Autoplay]}
                            breakpoints={{
                                576: {
                                    slidesPerView: 3,
                                    spaceBetween: 12,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                992: {
                                    slidesPerView: 5,
                                    spaceBetween: 20,
                                },
                                1290: {
                                    slidesPerView: 6,
                                    spaceBetween: 30,
                                },
                            }}
                            className='h-full'
                        >
                            {displayCategories ? (
                                // Render Strapi categories
                                displayCategories.map((category) => {
                                    const imageUrl = category.attributes.imagem?.data?.attributes?.url
                                        ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${category.attributes.imagem.data.attributes.url}`
                                        : '/images/collection/food.png'

                                    return (
                                        <SwiperSlide key={category.id}>
                                            <div className="trending-item block relative cursor-pointer" onClick={() => handleCategoryClick(category.attributes.slug)}>
                                                <div className="bg-img rounded-[32px] overflow-hidden">
                                                    <Image
                                                        src={imageUrl}
                                                        width={1000}
                                                        height={1000}
                                                        alt={category.attributes.nome}
                                                        priority={true}
                                                        className='w-full'
                                                    />
                                                </div>
                                                <div className="trending-name text-center mt-5 duration-500">
                                                    <span className='heading6'>{category.attributes.nome}</span>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                            ) : (
                                // Render default categories
                                defaultCategories.map((category, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="trending-item block relative cursor-pointer" onClick={() => handleCategoryClick(category.slug)}>
                                            <div className="bg-img rounded-[32px] overflow-hidden">
                                                <Image
                                                    src={category.imagem}
                                                    width={1000}
                                                    height={1000}
                                                    alt={category.nome}
                                                    priority={true}
                                                    className='w-full'
                                                />
                                            </div>
                                            <div className="trending-name text-center mt-5 duration-500">
                                                <span className='heading6'>{category.nome}</span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            )}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Collection
