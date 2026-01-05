import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface BannerItem {
    id: number
    attributes: {
        titulo: string
        subtitulo?: string
        textoDestaque?: string
        link?: string
        imagemDesktop: {
            data: {
                attributes: {
                    url: string
                }
            }
        }
        posicao: string
        ordem: number
        ativo: boolean
    }
}

interface BannerProps {
    banners?: BannerItem[]
}

const Banner: React.FC<BannerProps> = ({ banners = [] }) => {
    // Default banners (fallback se Strapi não tiver dados)
    const defaultBanners = [
        {
            titulo: 'Comida para Cães',
            subtitulo: 'Nutrição Completa',
            textoDestaque: '15 Produtos',
            link: '/shop/breadcrumb1',
            imagemDesktop: '/images/banner/24.png',
            hidden: false
        },
        {
            titulo: 'Comida para Gatos',
            subtitulo: 'Alimentação Especial',
            textoDestaque: '15 Produtos',
            link: '/shop/breadcrumb1',
            imagemDesktop: '/images/banner/25.png',
            hidden: false
        },
        {
            titulo: '20% de Desconto',
            subtitulo: 'Promoção Especial',
            textoDestaque: '15 Produtos',
            link: '/shop/breadcrumb1',
            imagemDesktop: '/images/banner/26.png',
            hidden: true // max-lg:hidden
        }
    ]

    // Use Strapi banners if available, filter promotional banners
    const displayBanners = banners.length > 0
        ? banners
            .filter(b => b.attributes.ativo && b.attributes.posicao === 'promotional')
            .sort((a, b) => a.attributes.ordem - b.attributes.ordem)
            .slice(0, 3)
        : null

    return (
        <>
            <div className="banner-block">
                <div className="container">
                    <div className="list-banner grid lg:grid-cols-3 md:grid-cols-2 gap-[20px]">
                        {displayBanners ? (
                            // Render Strapi banners
                            displayBanners.map((banner, index) => {
                                const imageUrl = banner.attributes.imagemDesktop?.data?.attributes?.url
                                    ? `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}${banner.attributes.imagemDesktop.data.attributes.url}`
                                    : '/images/banner/24.png'

                                return (
                                    <Link
                                        key={banner.id}
                                        href={banner.attributes.link || '/shop/breadcrumb1'}
                                        className={`banner-item relative block rounded-[20px] overflow-hidden duration-500 ${index === 2 ? 'max-lg:hidden' : ''}`}
                                    >
                                        <div className="banner-img w-full h-full">
                                            <Image
                                                src={imageUrl}
                                                width={1000}
                                                height={800}
                                                alt={banner.attributes.titulo}
                                                className='w-full h-full object-cover duration-500'
                                            />
                                        </div>
                                        <div className="text-content xl:py-0 md:py-4 absolute top-1/2 left-8 -translate-y-1/2 text-white">
                                            {banner.attributes.textoDestaque && (
                                                <div className="button-upper-case">{banner.attributes.textoDestaque}</div>
                                            )}
                                            <div className="heading3 mt-3">{banner.attributes.titulo}</div>
                                            {banner.attributes.subtitulo && (
                                                <div className="heading6 font-normal mt-1">{banner.attributes.subtitulo}</div>
                                            )}
                                            <div className="button-main mt-5">Comprar Agora</div>
                                        </div>
                                    </Link>
                                )
                            })
                        ) : (
                            // Render default banners
                            defaultBanners.map((banner, index) => (
                                <Link
                                    key={index}
                                    href={banner.link}
                                    className={`banner-item relative block rounded-[20px] overflow-hidden duration-500 ${banner.hidden ? 'max-lg:hidden' : ''}`}
                                >
                                    <div className="banner-img w-full h-full">
                                        <Image
                                            src={banner.imagemDesktop}
                                            width={1000}
                                            height={800}
                                            alt={banner.titulo}
                                            className='w-full h-full object-cover duration-500'
                                        />
                                    </div>
                                    <div className="text-content xl:py-0 md:py-4 absolute top-1/2 left-8 -translate-y-1/2 text-white">
                                        <div className="button-upper-case">{banner.textoDestaque}</div>
                                        <div className="heading3 mt-3">{banner.titulo}</div>
                                        <div className="heading6 font-normal mt-1">{banner.subtitulo}</div>
                                        <div className="button-main mt-5">Comprar Agora</div>
                                    </div>
                                </Link>
                            ))
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner