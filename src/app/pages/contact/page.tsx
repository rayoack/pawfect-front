'use client'
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Footer from '@/components/Footer/Footer'

const ContactUs = () => {
    return (
        <>
            <TopNavOne props="style-one bg-primary-blue-deep" slogan="Pawfect Pet Care - Cuidando do seu melhor amigo!" />
            <div id="header" className='relative w-full'>
                <MenuPet />
                <Breadcrumb heading='Contato' subHeading='Contato' />
            </div>
            <div className='contact-us md:py-20 py-10'>
                <div className="container">
                    <div className="flex justify-between max-lg:flex-col gap-y-10">
                        <div className="left lg:w-2/3 lg:pr-4">
                            <div className="heading3">Fale Conosco</div>
                            <div className="body1 text-secondary2 mt-3">Use o formulario abaixo para entrar em contato com nossa equipe. Responderemos o mais breve possivel!</div>
                            <form className="md:mt-6 mt-4">
                                <div className='grid sm:grid-cols-2 grid-cols-1 gap-4 gap-y-5'>
                                    <div className="name ">
                                        <input className="border-line px-4 py-3 w-full rounded-lg" id="username" type="text" placeholder="Seu Nome *" required />
                                    </div>
                                    <div className="email">
                                        <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="email" type="email" placeholder="Seu Email *" required />
                                    </div>
                                    <div className="phone">
                                        <input className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="phone" type="tel" placeholder="Seu Telefone" />
                                    </div>
                                    <div className="subject">
                                        <select className="border-line px-4 py-3 w-full rounded-lg bg-white" id="subject">
                                            <option value="">Selecione o Assunto</option>
                                            <option value="duvidas">Duvidas sobre Produtos</option>
                                            <option value="pedido">Informacoes sobre Pedido</option>
                                            <option value="sugestao">Sugestoes</option>
                                            <option value="reclamacao">Reclamacoes</option>
                                            <option value="outros">Outros</option>
                                        </select>
                                    </div>
                                    <div className="message sm:col-span-2">
                                        <textarea className="border-line px-4 pt-3 pb-3 w-full rounded-lg" id="message" rows={4} placeholder="Sua Mensagem *" required />
                                    </div>
                                </div>
                                <div className="block-button md:mt-6 mt-4">
                                    <button className="button-main">Enviar Mensagem</button>
                                </div>
                            </form>
                        </div>
                        <div className="right lg:w-1/4 lg:pl-4">
                            <div className="item">
                                <div className="heading4">Nossa Loja</div>
                                <p className="mt-3">Estr. dos Tres Rios, 1810 - Freguesia, Rio de Janeiro - RJ, 22745-004</p>
                                <p className="mt-3">Telefone: <span className='whitespace-nowrap'>(21) 99999-9999</span></p>
                                <p className="mt-1">Email: <span className='whitespace-nowrap'>contato@pawfect.com.br</span></p>
                            </div>
                            <div className="item mt-10">
                                <div className="heading4">Horario de Funcionamento</div>
                                <p className="mt-3">Segunda a Sexta: <span className='whitespace-nowrap'>08:00 - 20:00</span></p>
                                <p className="mt-3">Sabado: <span className='whitespace-nowrap'>09:00 - 18:00</span></p>
                                <p className="mt-3">Domingo: <span className='whitespace-nowrap'>10:00 - 16:00</span></p>
                            </div>
                            <div className="item mt-10">
                                <div className="heading4">Redes Sociais</div>
                                <div className="flex items-center gap-4 mt-3">
                                    <Link href={'https://www.instagram.com/pawfect'} target='_blank' className="item bg-surface w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-blue-deep hover:text-white duration-300">
                                        <div className="icon-instagram"></div>
                                    </Link>
                                    <Link href={'https://www.facebook.com/pawfect'} target='_blank' className="item bg-surface w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-blue-deep hover:text-white duration-300">
                                        <div className="icon-facebook"></div>
                                    </Link>
                                    <Link href={'https://wa.me/5511999999999'} target='_blank' className="item bg-surface w-10 h-10 rounded-full flex items-center justify-center hover:bg-primary-blue-deep hover:text-white duration-300">
                                        <div className="icon-phone"></div>
                                    </Link>
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

export default ContactUs
