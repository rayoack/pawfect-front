'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css/bundle';
import 'swiper/css/effect-fade';


const SliderPet = () => {
    return (
        <>
            <div className="slider-block style-one 2xl:h-[780px] xl:h-[740px] lg:h-[680px] md:h-[580px] sm:h-[500px] h-[420px] w-full md:pb-20 pb-10">
                <div className="slider-main h-full w-full">
                    <Swiper
                        spaceBetween={0}
                        slidesPerView={1}
                        loop={true}
                        pagination={{ clickable: true }}
                        modules={[Pagination, Autoplay]}
                        className='h-full relative'
                        autoplay={{
                            delay: 4000,
                        }}
                    >
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex items-center">
                                    <div className="text-content sm:w-1/2 w-2/3">
                                        <div className="text-sub-display">Promoção! Até 50% OFF!</div>
                                        <div className="text-display md:mt-5 mt-2">A Loja Perfeita do Seu Pet</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Comprar Agora</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/pet/banner-1.jpg'}
                                            width={2560}
                                            height={1080}
                                            alt='Homem abraçando cachorro - Pawfect Pet Care'
                                            priority={true}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex items-center">
                                    <div className="text-content sm:w-1/2 w-2/3">
                                        <div className="text-sub-display">Produtos para Cães e Gatos!</div>
                                        <div className="text-display md:mt-5 mt-2">Libere um Pet Feliz e Saudável</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Comprar Agora</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/pet/banner-2.jpg'}
                                            width={2560}
                                            height={1080}
                                            alt='Mulher com gato em casa - Pawfect Pet Care'
                                            priority={true}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="slider-item h-full w-full relative">
                                <div className="container w-full h-full flex items-center">
                                    <div className="text-content sm:w-1/2 w-2/3">
                                        <div className="text-sub-display">Frete Grátis acima de R$199!</div>
                                        <div className="text-display md:mt-5 mt-2">Momentos Especiais com Seu Pet</div>
                                        <Link href='/shop/breadcrumb-img' className="button-main md:mt-8 mt-3">Comprar Agora</Link>
                                    </div>
                                    <div className="sub-img absolute left-0 top-0 w-full h-full z-[-1]">
                                        <Image
                                            src={'/images/slider/pet/banner-3.jpg'}
                                            width={2560}
                                            height={1080}
                                            alt='Casal na praia com cachorro - Pawfect Pet Care'
                                            priority={true}
                                            className='w-full h-full object-cover'
                                        />
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default SliderPet