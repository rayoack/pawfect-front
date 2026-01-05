'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'

const StoreList = () => {
    return (
        <>
            <TopNavOne props="style-one bg-primary-blue-deep" slogan="Pawfect Pet Care - Cuidando do seu melhor amigo!" />
            <div id="header" className='relative w-full'>
                <MenuPet />
                <Breadcrumb heading='Nossa Loja' subHeading='Nossa Loja' />
            </div>
            <div className='store-list md:py-20 py-10'>
                <div className="container">
                    {/* Loja Matriz - Freguesia */}
                    <div className="item bg-surface overflow-hidden rounded-[20px]">
                        <div className="flex items-center lg:justify-end relative max-lg:flex-col">
                            <Image
                                src={'/images/other/store-list-office1.png'}
                                width={3000}
                                height={2000}
                                alt='Loja Pawfect Freguesia'
                                className='lg:absolute relative top-0 left-0 lg:bottom-0 lg:w-1/2 w-full h-full object-cover'
                            />
                            <div className="text-content lg:w-1/2 lg:pr-20 lg:pl-[100px] lg:py-14 sm:py-10 py-6 max-lg:px-6">
                                <div className="heading3">Pawfect Pet Care - Freguesia</div>
                                <div className="body1 text-secondary mt-2">Um lugar de Pet feliz!</div>
                                <div className="list-featrue lg:mt-10 mt-6">
                                    <div className="item flex lg:gap-10 gap-6">
                                        <div className='w-1/2'>
                                            <div className="heading6">Endereco:</div>
                                            <div className="text-secondary mt-2">Estr. dos Tres Rios, 1810 - Freguesia, Rio de Janeiro - RJ, 22745-004</div>
                                        </div>
                                        <div className='w-1/2'>
                                            <div className="heading6">Horario:</div>
                                            <div className="text-secondary mt-2 whitespace-nowrap">Segunda a Sexta:</div>
                                            <div className='text-title text-black whitespace-nowrap'>08:00 - 20:00</div>
                                            <div className="text-secondary whitespace-nowrap">Sabado e Domingo:</div>
                                            <div className='text-title text-black whitespace-nowrap'>09:00 - 18:00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="list-featrue mt-5">
                                    <div className="item flex lg:gap-10 gap-6">
                                        <div className='w-1/2'>
                                            <div className="heading6">Contato:</div>
                                            <div className="text-secondary mt-2">(21) 99999-9999<br />
                                                contato@pawfect.com.br</div>
                                        </div>
                                        <div className='w-1/2'>
                                            <div className="heading6">Redes Sociais:</div>
                                            <div className="flex items-center sm:gap-4 gap-2 mt-2">
                                                <Link href={'https://www.facebook.com/pawfect'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-blue-deep hover:text-white duration-300">
                                                    <div className="icon-facebook"></div>
                                                </Link>
                                                <Link href={'https://www.instagram.com/pawfect'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-blue-deep hover:text-white duration-300">
                                                    <div className="icon-instagram"></div>
                                                </Link>
                                                <Link href={'https://wa.me/5521999999999'} target='_blank' className="item bg-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-blue-deep hover:text-white duration-300">
                                                    <div className="icon-phone"></div>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default StoreList
