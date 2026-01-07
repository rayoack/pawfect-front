import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Footer = () => {
    return (
        <>
            <div id="footer" className='footer'>
                <div className="footer-main bg-surface">
                    <div className="container">
                        <div className="content-footer py-[60px] flex flex-col gap-y-8">
                            {/* Logo */}
                            <div className="company-header">
                                <Link href={'/'} className="logo">
                                    <Image
                                        src='/images/logo/pawfect-logo.png'
                                        alt='Pawfect Pet Care'
                                        width={150}
                                        height={50}
                                        className='h-auto'
                                    />
                                </Link>
                            </div>
                            {/* Contact info + Navigation columns */}
                            <div className="nav-content flex justify-between flex-wrap gap-y-8 max-md:flex-col max-md:gap-6">
                                <div className='contact-info flex flex-col'>
                                    <div className="text-button-uppercase pb-3">Contato</div>
                                    <div className="flex gap-2">
                                        <span className="text-button">Email:</span>
                                        <span>contato@pawfect.com.br</span>
                                    </div>
                                    <div className="flex gap-2 pt-2">
                                        <span className="text-button">Telefone:</span>
                                        <span>(21) 99999-9999</span>
                                    </div>
                                    <div className="flex gap-2 pt-2">
                                        <span className="text-button">Endereco:</span>
                                        <span>Estr. dos Tres Rios, 1810 - Freguesia, RJ</span>
                                    </div>
                                </div>
                                <div className="item flex flex-col">
                                    <div className="text-button-uppercase pb-3">Informacoes</div>
                                    <Link className='caption1 has-line-before duration-300 w-fit' href={'/pages/contact'}>Contato</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/about'}>Quem Somos</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/my-account'}>Minha Conta</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/store-list'}>Nossa Loja</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/faqs'}>Perguntas Frequentes</Link>
                                </div>
                                <div className="item flex flex-col">
                                    <div className="text-button-uppercase pb-3">Categorias</div>
                                    <Link className='caption1 has-line-before duration-300 w-fit' href={'/shop/breadcrumb1'}>Alimentacao</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb1'}>Brinquedos</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb1'}>Roupas</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb1'}>Acessorios</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/shop/breadcrumb1'}>Farmacia</Link>
                                </div>
                                <div className="item flex flex-col">
                                    <div className="text-button-uppercase pb-3">Atendimento</div>
                                    <Link className='caption1 has-line-before duration-300 w-fit' href={'/pages/faqs'}>Duvidas Frequentes</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/faqs'}>Entregas</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/faqs'}>Politica de Privacidade</Link>
                                    <Link className='caption1 has-line-before duration-300 w-fit pt-2' href={'/pages/faqs'}>Trocas e Devolucoes</Link>
                                </div>
                                <div className="item flex flex-col">
                                    <div className="text-button-uppercase pb-3">Redes Sociais</div>
                                    <div className="list-social flex items-center gap-6 pt-1">
                                        <Link href={'https://www.facebook.com/pawfect'} target='_blank'>
                                            <div className="icon-facebook text-2xl text-black hover:text-primary-blue-deep duration-300"></div>
                                        </Link>
                                        <Link href={'https://www.instagram.com/pawfect'} target='_blank'>
                                            <div className="icon-instagram text-2xl text-black hover:text-primary-blue-deep duration-300"></div>
                                        </Link>
                                        <Link href={'https://wa.me/5521999999999'} target='_blank'>
                                            <div className="icon-phone text-2xl text-black hover:text-primary-blue-deep duration-300"></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-bottom py-3 flex items-center justify-between gap-5 max-lg:justify-center max-lg:flex-col border-t border-line">
                            <div className="left flex items-center gap-8">
                                <div className="copyright caption1 text-secondary">©2026 Pawfect Pet Care. Todos os direitos reservados.</div>
                                <div className="select-block flex items-center gap-5 max-md:hidden">
                                    <div className="choose-language flex items-center gap-1.5">
                                        <select name="language" id="chooseLanguageFooter" className='caption2 bg-transparent'>
                                            <option value="Portugues">Portugues</option>
                                        </select>
                                        <Icon.CaretDown size={12} color='#1F1F1F' />
                                    </div>
                                    <div className="choose-currency flex items-center gap-1.5">
                                        <select name="currency" id="chooseCurrencyFooter" className='caption2 bg-transparent'>
                                            <option value="BRL">R$</option>
                                        </select>
                                        <Icon.CaretDown size={12} color='#1F1F1F' />
                                    </div>
                                </div>
                            </div>
                            <div className="right flex items-center gap-2">
                                <div className="caption1 text-secondary">Pagamento:</div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-0.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-1.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-2.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-3.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-4.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                                <div className="payment-img">
                                    <Image
                                        src={'/images/payment/Frame-5.png'}
                                        width={500}
                                        height={500}
                                        alt={'payment'}
                                        className='w-9'
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
