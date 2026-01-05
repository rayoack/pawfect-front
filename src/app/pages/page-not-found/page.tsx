'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const PageNotFound = () => {
    return (
        <>
            <TopNavOne props="style-one bg-primary-blue-deep" slogan="Pawfect Pet Care - Cuidando do seu melhor amigo!" />
            <div id="header" className='relative w-full'>
                <MenuPet />
            </div>
            <div className='page-not-found md:py-20 py-10 bg-linear md:mt-[74px] mt-14'>
                <div className="container">
                    <div className="flex items-center justify-between max-sm:flex-col gap-y-8">
                        <Image
                            src={'/images/other/404-img.png'}
                            width={2000}
                            height={2000}
                            alt='Pagina nao encontrada'
                            priority={true}
                            className='sm:w-1/2 w-3/4'
                        />
                        <div className="text-content sm:w-1/2 w-full flex items-center justify-center sm:pl-10">
                            <div className=''>
                                <div className="lg:text-[140px] md:text-[80px] text-[42px] lg:leading-[152px] md:leading-[92px] leading-[52px] font-semibold text-primary-blue-deep">404</div>
                                <div className="heading2 mt-4">Ops! Pagina nao encontrada.</div>
                                <div className="body1 text-secondary mt-4 pb-4">Parece que essa pagina fugiu como um gatinho curioso! <br className='max-xl:hidden' />Vamos te ajudar a voltar para casa.</div>
                                <Link className="flex items-center gap-3 text-primary-blue-deep hover:text-accent-orange-intense duration-300" href={'/'}>
                                    <Icon.ArrowLeft />
                                    <div className="text-button">Voltar para a Pagina Inicial</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PageNotFound
