'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as Icon from "@phosphor-icons/react/dist/ssr";
import { usePathname } from 'next/navigation';
import Product from '@/components/Product/Product';
import productData from '@/data/Product.json'
import useLoginPopup from '@/store/useLoginPopup';
import useShopDepartmentPopup from '@/store/useShopDepartmentPopup';
import useMenuMobile from '@/store/useMenuMobile';
import { useModalCartContext } from '@/context/ModalCartContext';
import { useModalWishlistContext } from '@/context/ModalWishlistContext';
import { useModalSearchContext } from '@/context/ModalSearchContext';
import { useCart } from '@/context/CartContext';

const MenuPet = () => {
    const pathname = usePathname()
    const { openLoginPopup, handleLoginPopup } = useLoginPopup()
    const { openShopDepartmentPopup, handleShopDepartmentPopup } = useShopDepartmentPopup()
    const { openMenuMobile, handleMenuMobile } = useMenuMobile()
    const [openSubNavMobile, setOpenSubNavMobile] = useState<number | null>(null)
    const { openModalCart } = useModalCartContext()
    const { cartState } = useCart()
    const { openModalWishlist } = useModalWishlistContext()
    const { openModalSearch } = useModalSearchContext()

    const [searchKeyword, setSearchKeyword] = useState('');
    const router = useRouter()

    const handleSearch = (value: string) => {
        router.push(`/search-result?query=${value}`)
        setSearchKeyword('')
    }

    const handleOpenSubNavMobile = (index: number) => {
        setOpenSubNavMobile(openSubNavMobile === index ? null : index)
    }

    const [fixedHeader, setFixedHeader] = useState(false)
    const [lastScrollPosition, setLastScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setFixedHeader(scrollPosition > 0 && scrollPosition < lastScrollPosition);
            setLastScrollPosition(scrollPosition);
        };

        // Gắn sự kiện cuộn khi component được mount
        window.addEventListener('scroll', handleScroll);

        // Hủy sự kiện khi component bị unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollPosition]);

    const handleGenderClick = (gender: string) => {
        router.push(`/shop/breadcrumb1?gender=${gender}`);
    };

    const handleCategoryClick = (category: string) => {
        router.push(`/shop/breadcrumb1?category=${category}`);
    };

    const handleTypeClick = (type: string) => {
        router.push(`/shop/breadcrumb1?type=${type}`);
    };

    return (
        <>
            <div className={`header-menu style-eight fixed top-0 left-0 right-0 z-50 bg-surface w-full md:h-[90px] h-[64px]`}>
                <div className="container mx-auto h-full">
                    <div className="header-main flex items-center justify-between h-full">
                        <div className="menu-mobile-icon lg:hidden flex items-center" onClick={handleMenuMobile}>
                            <i className="icon-category text-2xl"></i>
                        </div>
                        <Link href={'/'} className='flex items-center'>
                            <Image
                                src='/images/logo/pawfect-logo.png'
                                alt='Pawfect Pet Care'
                                width={150}
                                height={50}
                                priority
                                className='h-auto'
                            />
                        </Link>
                        <div className="form-search w-[54%] pl-8 flex items-center h-[48px] max-lg:hidden">
                            <div className='w-full flex items-center h-full'>
                                <input
                                    type="text"
                                    className="search-input h-full px-4 w-full border border-line rounded-l-2xl"
                                    placeholder="O que você procura hoje?"
                                    value={searchKeyword}
                                    onChange={(e) => setSearchKeyword(e.target.value)}
                                    onKeyDown={(e) => e.key === 'Enter' && handleSearch(searchKeyword)}
                                />
                                <button
                                    className="search-button button-main bg-black h-full flex items-center px-3 rounded-l-none rounded-r-2xl"
                                    onClick={() => {
                                        handleSearch(searchKeyword)
                                    }}
                                >
                                    <Icon.MagnifyingGlass color='#fff' size={24} weight='bold' className='duration-300' />
                                </button>
                            </div>
                        </div>
                        <div className="right flex gap-12">
                            <div className="list-action flex items-center gap-6">
                                <div className="user-icon flex items-center flex-col justify-center cursor-pointer">
                                    <Icon.User size={24} color='black' onClick={handleLoginPopup} />
                                    <div className="caption1" onClick={handleLoginPopup}>Conta</div>
                                    <div
                                        className={`login-popup absolute top-[74px] w-[320px] p-7 rounded-xl bg-white box-shadow-sm
                                            ${openLoginPopup ? 'open' : ''}`}
                                    >
                                        <Link href={'/login'} className="button-main w-full text-center">Entrar</Link>
                                        <div className="text-secondary text-center mt-3 pb-4">Não tem uma conta?
                                            <Link href={'/register'} className='text-black pl-1 hover:underline'>Registrar</Link>
                                        </div>
                                        <Link href={'/my-account'} className="button-main bg-white text-black border border-black w-full text-center">Painel</Link>
                                        <div className="bottom mt-4 pt-4 border-t border-line"></div>
                                        <Link href={'/favoritos'} className='body1 hover:underline'>Favoritos</Link>
                                    </div>
                                </div>
                                <div className="max-md:hidden wishlist-icon flex flex-col items-center cursor-pointer" onClick={openModalWishlist}>
                                    <Icon.Heart size={24} color='black' />
                                    <div className="caption1">Favoritos</div>
                                </div>
                                <div className="cart-icon flex flex-col items-center relative cursor-pointer" onClick={openModalCart}>
                                    <Icon.Handbag size={24} color='black' />
                                    <div className="caption1">Carrinho</div>
                                    <span className="quantity cart-quantity absolute -right-1 -top-1.5 text-xs text-white bg-black w-4 h-4 flex items-center justify-center rounded-full">{cartState.cartArray.length}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="top-nav-menu fixed md:top-[90px] top-[64px] left-0 right-0 bg-white h-[44px] max-lg:hidden z-40">
                <div className="container h-full">
                    <div className="top-nav-menu-main flex items-center justify-between h-full">
                        <div className="left flex items-center h-full">
                            <div className="menu-department-block relative h-full">
                                <div
                                    className="menu-department-btn bg-black relative flex items-center gap-2 pl-4 pr-24 h-full w-fit cursor-pointer"
                                    onClick={handleShopDepartmentPopup}
                                >
                                    <i className="icon-category text-white"></i>
                                    <div className="text-button-uppercase text-white whitespace-nowrap">Categorias</div>
                                </div>
                                <div
                                    className={`sub-menu-department absolute top-[44px] left-0 right-0 h-max bg-white rounded-b-2xl ${openShopDepartmentPopup ? 'open' : ''}`}
                                >
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Ração para Cães</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Roupas para Cães</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Brinquedos para Cães</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Acessórios para Cães</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Ração para Gatos</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Roupas para Gatos</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Brinquedos para Gatos</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 border-b border-line whitespace-nowrap block'>Acessórios para Gatos</Link>
                                    </div>
                                    <div className="item block">
                                        <Link href={'/shop/breadcrumb-img'} className='caption1 py-4 px-5 whitespace-nowrap block'>Serviços Pet</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="menu-main style-eight h-full pl-12 max-lg:hidden">
                                <ul className='flex items-center gap-8 h-full'>
                                    <li className='h-full'>
                                        <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                            Destaques
                                        </Link>
                                        <div className="mega-menu absolute top-[44px] left-0 bg-white w-screen">
                                            <div className="container">
                                                <div className="flex justify-between py-8">
                                                    <div className="nav-link basis-2/3 grid grid-cols-4 gap-y-8">
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-2">Promoções</div>
                                                            <ul>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleCategoryClick('pet')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        A partir de 50% Off
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('cama')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Camas Pet
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('brinquedo')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Brinquedos
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('racao')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Rações
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleCategoryClick('pet')}
                                                                        className={`link text-secondary duration-300 cursor-pointer view-all-btn`}
                                                                    >
                                                                        Ver Todos
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-2">Cães</div>
                                                            <ul>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('racao')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Ração para Cães
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('roupa')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Roupas para Cães
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('cama')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Camas para Cães
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('brinquedo')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Brinquedos para Cães
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleCategoryClick('pet')}
                                                                        className={`link text-secondary duration-300 view-all-btn`}
                                                                    >
                                                                        Ver Todos
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-2">Gatos</div>
                                                            <ul>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('acessorio')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Acessórios para Gatos
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('racao')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Ração para Gatos
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('cama')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Camas para Gatos
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('brinquedo')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Brinquedos para Gatos
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleCategoryClick('pet')}
                                                                        className={`link text-secondary duration-300 view-all-btn`}
                                                                    >
                                                                        Ver Todos
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-2">Novidades</div>
                                                            <ul>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('petisco')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Petiscos
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('higiene')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Higiene
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('farmacia')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Farmácia
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleTypeClick('acessorio')}
                                                                        className={`link text-secondary duration-300 cursor-pointer`}
                                                                    >
                                                                        Acessórios
                                                                    </div>
                                                                </li>
                                                                <li>
                                                                    <div
                                                                        onClick={() => handleCategoryClick('pet')}
                                                                        className={`link text-secondary duration-300 view-all-btn`}
                                                                    >
                                                                        Ver Todos
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="banner-ads-block pl-2.5 basis-1/3">
                                                        <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden cursor-pointer" onClick={() => handleCategoryClick('pet')}>
                                                            <div className="text-content py-14 pl-8 relative z-[1]">
                                                                <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Economize R$50</div>
                                                                <div className="heading6 mt-2">20% off <br />Coleção Pet</div>
                                                                <div className="body1 mt-3 text-secondary">
                                                                    A partir de <span className='text-red'>R$59,99</span>
                                                                </div>
                                                                <div className="button-main mt-5">Comprar Agora</div>
                                                            </div>
                                                            <Image
                                                                src={'/images/other/bg-feature-pet.png'}
                                                                width={1000}
                                                                height={800}
                                                                alt='bg-img'
                                                                className='absolute left-0 top-0 w-full h-full object-cover'
                                                            />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='h-full'>
                                        <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                            Loja
                                        </Link>
                                        <div className="mega-menu absolute top-[44px] left-0 bg-white w-screen">
                                            <div className="container">
                                                <div className="flex justify-between py-8">
                                                    <div className="nav-link basis-2/3 flex justify-between pr-12">
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-2">Navegação</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/breadcrumb-img'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                    >
                                                                        Loja com Imagem
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/breadcrumb1'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                    >
                                                                        Loja Estilo 1
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/breadcrumb2'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                    >
                                                                        Loja Estilo 2
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/collection'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/shop/collection' ? 'active' : ''}`}
                                                                    >
                                                                        Coleção
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-2">Filtros</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/filter-canvas'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/shop/filter-canvas' ? 'active' : ''}`}
                                                                    >
                                                                        Filtro Lateral
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/filter-options'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/shop/filter-options' ? 'active' : ''}`}
                                                                    >
                                                                        Opções de Filtro
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/filter-dropdown'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/shop/filter-dropdown' ? 'active' : ''}`}
                                                                    >
                                                                        Filtro Dropdown
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/sidebar-list'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/shop/sidebar-list' ? 'active' : ''}`}
                                                                    >
                                                                        Lista Lateral
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-2">Layout da Loja</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/default'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/shop/default' ? 'active' : ''}`}
                                                                    >
                                                                        Loja Padrão
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/default-grid'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/shop/default-grid' ? 'active' : ''}`}
                                                                    >
                                                                        Loja em Grade
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/default-list'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/shop/default-list' ? 'active' : ''}`}
                                                                    >
                                                                        Loja em Lista
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/fullwidth'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/shop/fullwidth' ? 'active' : ''}`}
                                                                    >
                                                                        Loja Largura Total
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/square'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/shop/square' ? 'active' : ''}`}
                                                                    >
                                                                        Loja Quadrada
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/checkout'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/checkout' ? 'active' : ''}`}
                                                                    >
                                                                        Finalizar Compra
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/checkout2'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/checkout2' ? 'active' : ''}`}
                                                                    >
                                                                        Finalizar Compra 2
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-2">Páginas</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/wishlist'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/wishlist' ? 'active' : ''}`}
                                                                    >
                                                                        Lista de Desejos
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/search-result'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/search-result' ? 'active' : ''}`}
                                                                    >
                                                                        Resultado da Busca
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/cart'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/cart' ? 'active' : ''}`}
                                                                    >
                                                                        Carrinho
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/login'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/login' ? 'active' : ''}`}
                                                                    >
                                                                        Login/Cadastro
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/forgot-password'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/forgot-password' ? 'active' : ''}`}
                                                                    >
                                                                        Esqueceu a Senha
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/order-tracking'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/order-tracking' ? 'active' : ''}`}
                                                                    >
                                                                        Rastrear Pedido
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/my-account'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/my-account' ? 'active' : ''}`}
                                                                    >
                                                                        Minha Conta
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="recent-product pl-2.5 basis-1/3">
                                                        <div className="text-button-uppercase pb-2">Produtos Recentes</div>
                                                        <div className="list-product hide-product-sold  grid grid-cols-2 gap-5 mt-3">
                                                            {productData.filter(item => item.action === 'add to cart' && item.category === 'pet').slice(0, 2).map((prd, index) => (
                                                                <Product key={index} data={prd} type='grid' style='style-1' />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='h-full'>
                                        <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                            Produtos
                                        </Link>
                                        <div className="mega-menu absolute top-[44px] left-0 bg-white w-screen">
                                            <div className="container">
                                                <div className="flex justify-between py-8">
                                                    <div className="nav-link basis-2/3 flex justify-between xl:pr-14 pr-5">
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-2">Tipos de Produto</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/default'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/default' ? 'active' : ''}`}
                                                                    >
                                                                        Produto Padrão
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/sale'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/sale' ? 'active' : ''}`}
                                                                    >
                                                                        Produto em Promoção
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/countdown-timer'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/countdown-timer' ? 'active' : ''}`}
                                                                    >
                                                                        Contagem Regressiva
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/grouped'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/grouped' ? 'active' : ''}`}
                                                                    >
                                                                        Produtos Agrupados
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/bought-together'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/bought-together' ? 'active' : ''}`}
                                                                    >
                                                                        Comprados Juntos
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/out-of-stock'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/out-of-stock' ? 'active' : ''}`}
                                                                    >
                                                                        Produtos Esgotados
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/variable'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/variable' ? 'active' : ''}`}
                                                                    >
                                                                        Produtos Variáveis
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-2">Recursos</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/external'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/external' ? 'active' : ''}`}
                                                                    >
                                                                        Produto Externo
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/on-sale'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/on-sale' ? 'active' : ''}`}
                                                                    >
                                                                        Produto em Oferta
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/discount'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/discount' ? 'active' : ''}`}
                                                                    >
                                                                        Produto com Desconto
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/sidebar'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/sidebar' ? 'active' : ''}`}
                                                                    >
                                                                        Produto com Sidebar
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/fixed-price'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/fixed-price' ? 'active' : ''}`}
                                                                    >
                                                                        Produto Preço Fixo
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-2">Layout de Produtos</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/thumbnail-left'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/product/thumbnail-left' ? 'active' : ''}`}
                                                                    >
                                                                        Miniaturas à Esquerda
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/thumbnail-bottom'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/product/thumbnail-bottom' ? 'active' : ''}`}
                                                                    >
                                                                        Miniaturas na Base
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/one-scrolling'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/product/one-scrolling' ? 'active' : ''}`}
                                                                    >
                                                                        Grade 1 com Rolagem
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/two-scrolling'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/product/two-scrolling' ? 'active' : ''}`}
                                                                    >
                                                                        Grade 2 com Rolagem
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/combined-one'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/product/combined-one' ? 'active' : ''}`}
                                                                    >
                                                                        Combinado 1
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/combined-two'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/product/combined-two' ? 'active' : ''}`}
                                                                    >
                                                                        Combinado 2
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="recent-product pl-2.5 basis-1/3">
                                                        <div className="text-button-uppercase pb-2">Produtos Recentes</div>
                                                        <div className="list-product hide-product-sold  grid grid-cols-2 gap-5 mt-3">
                                                            {productData.filter(item => item.action === 'add to cart' && item.category === 'pet').slice(0, 2).map((prd, index) => (
                                                                <Product key={index} data={prd} type='grid' style='style-1' />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className='h-full relative'>
                                        <Link href="#!" className='text-button-uppercase duration-300 h-full flex items-center justify-center'>
                                            Artigos
                                        </Link>
                                        <div className="sub-menu py-3 px-5 -left-10 absolute bg-white rounded-b-xl">
                                            <ul className='w-full'>
                                                <li>
                                                    <Link href="/blog/default" className={`text-secondary duration-300 ${pathname === '/blog/default' ? 'active' : ''}`}>
                                                        Blog Padrão
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog/list" className={`text-secondary duration-300 ${pathname === '/blog/list' ? 'active' : ''}`}>
                                                        Blog em Lista
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog/grid" className={`text-secondary duration-300 ${pathname === '/blog/grid' ? 'active' : ''}`}>
                                                        Blog em Grade
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog/detail1" className={`text-secondary duration-300 ${pathname === '/blog/detail1' ? 'active' : ''}`}>
                                                        Detalhe do Artigo 1
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/blog/detail2" className={`text-secondary duration-300 ${pathname === '/blog/detail2' ? 'active' : ''}`}>
                                                        Detalhe do Artigo 2
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className='h-full relative'>
                                        <Link href="#!" className={`text-button-uppercase duration-300 h-full flex items-center justify-center ${pathname.includes('/pages') ? 'active' : ''}`}>
                                            Páginas
                                        </Link>
                                        <div className="sub-menu py-3 px-5 -left-10 absolute bg-white rounded-b-xl">
                                            <ul className='w-full'>
                                                <li>
                                                    <Link href="/pages/about" className={`text-secondary duration-300 ${pathname === '/pages/about' ? 'active' : ''}`}>
                                                        Sobre Nós
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pages/contact" className={`text-secondary duration-300 ${pathname === '/pages/contact' ? 'active' : ''}`}>
                                                        Contato
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pages/store-list" className={`text-secondary duration-300 ${pathname === '/pages/store-list' ? 'active' : ''}`}>
                                                        Nossas Lojas
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pages/page-not-found" className={`text-secondary duration-300 ${pathname === '/pages/page-not-found' ? 'active' : ''}`}>
                                                        404
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pages/faqs" className={`text-secondary duration-300 ${pathname === '/pages/faqs' ? 'active' : ''}`}>
                                                        FAQs
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pages/coming-soon" className={`text-secondary duration-300 ${pathname === '/pages/coming-soon' ? 'active' : ''}`}>
                                                        Em Breve
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href="/pages/customer-feedbacks" className={`text-secondary duration-300 ${pathname === '/pages/customer-feedbacks' ? 'active' : ''}`}>
                                                        Avaliações de Clientes
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="right flex items-center gap-1 max-[1240px]:hidden">
                            <div className="text-button">Oferta: <span className='text-red'>Frete grátis</span> em todos os pedidos acima de R$50</div>
                        </div>
                    </div>
                </div>
            </div>

            <div id="menu-mobile" className={`${openMenuMobile ? 'open' : ''}`}>
                <div className="menu-container bg-white h-full">
                    <div className="container h-full">
                        <div className="menu-main h-full overflow-hidden">
                            <div className="heading py-2 relative flex items-center justify-center">
                                <div
                                    className="close-menu-mobile-btn absolute left-0 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-surface flex items-center justify-center"
                                    onClick={handleMenuMobile}
                                >
                                    <Icon.X size={14} />
                                </div>
                                <Link href={'/'} className='logo flex justify-center'>
                                    <Image
                                        src='/images/logo/pawfect-logo.png'
                                        alt='Pawfect Pet Care'
                                        width={120}
                                        height={40}
                                        className='h-auto'
                                    />
                                </Link>
                            </div>
                            <div className="form-search relative mt-2">
                                <Icon.MagnifyingGlass size={20} className='absolute left-3 top-1/2 -translate-y-1/2 cursor-pointer' />
                                <input type="text" placeholder='O que você procura?' className=' h-12 rounded-lg border border-line text-sm w-full pl-10 pr-4' />
                            </div>
                            <div className="list-nav mt-6">
                                <ul>
                                    <li
                                        className={`${openSubNavMobile === 1 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(1)}
                                    >
                                        <a href={'#!'} className={`text-xl font-semibold flex items-center justify-between`}>Demo
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(1)}
                                            >
                                                <Icon.CaretLeft />
                                                Back
                                            </div>
                                            <div className="list-nav-item w-full grid grid-cols-2 pt-2 pb-6">
                                                <ul>
                                                    <li>
                                                        <Link href="/" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/' ? 'active' : ''}`}>
                                                            Home Fashion 1
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/fashion2" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/fashion2' ? 'active' : ''}`}>
                                                            Home Fashion 2
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/fashion3" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/fashion3' ? 'active' : ''}`}>
                                                            Home Fashion 3
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/fashion4" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/fashion4' ? 'active' : ''}`}>
                                                            Home Fashion 4
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/fashion5" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/fashion5' ? 'active' : ''}`}>
                                                            Home Fashion 5
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/fashion6" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/fashion6' ? 'active' : ''}`}>
                                                            Home Fashion 6
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/fashion7" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/fashion7' ? 'active' : ''}`}>
                                                            Home Fashion 7
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/fashion8" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/fashion8' ? 'active' : ''}`}>
                                                            Home Fashion 8
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/fashion9" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/fashion9' ? 'active' : ''}`}>
                                                            Home Fashion 9
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/fashion10" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/fashion10' ? 'active' : ''}`}>
                                                            Home Fashion 10
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/fashion11" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/fashion11' ? 'active' : ''}`}>
                                                            Home Fashion 11
                                                        </Link>
                                                    </li>
                                                </ul>
                                                <ul>
                                                    <li>
                                                        <Link href="/homepages/underwear" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/underwear' ? 'active' : ''}`}>
                                                            Home Underwear
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/cosmetic1" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/cosmetic1' ? 'active' : ''}`}>
                                                            Home Cosmetic 1
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/cosmetic2" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/cosmetic2' ? 'active' : ''}`}>
                                                            Home Cosmetic 2
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/cosmetic3" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/cosmetic3' ? 'active' : ''}`}>
                                                            Home Cosmetic 3
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/pet" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/pet' ? 'active' : ''}`}>
                                                            Home Pet Store
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/jewelry" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/jewelry' ? 'active' : ''}`}>
                                                            Home Jewelry
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/furniture" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/furniture' ? 'active' : ''}`}>
                                                            Home Furniture
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/watch" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/watch' ? 'active' : ''}`}>
                                                            Home Watch
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/toys" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/toys' ? 'active' : ''}`}>
                                                            Home Toys Kid
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/yoga" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/yoga' ? 'active' : ''}`}>
                                                            Home Yoga
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/organic" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/organic' ? 'active' : ''}`}>
                                                            Home Organic
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/homepages/marketplace" className={`nav-item-mobile text-secondary duration-300 ${pathname === '/homepages/marketplace' ? 'active' : ''}`}>
                                                            Home Marketplace
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className={`${openSubNavMobile === 2 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(2)}
                                    >
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Features
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(2)}
                                            >
                                                <Icon.CaretLeft />
                                                Back
                                            </div>
                                            <div className="list-nav-item w-full pt-3 pb-12">
                                                <div className="nav-link grid grid-cols-2 gap-5 gap-y-6">
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Promoções</div>
                                                        <ul>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleCategoryClick('pet')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    A partir de 50% Off
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('cama')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Camas Pet
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('brinquedo')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Brinquedos
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('racao')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Rações
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleCategoryClick('pet')}
                                                                    className={`link text-secondary duration-300 cursor-pointer view-all-btn`}
                                                                >
                                                                    Ver Todos
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Cães</div>
                                                        <ul>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('racao')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Ração para Cães
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('roupa')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Roupas para Cães
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('cama')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Camas para Cães
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('brinquedo')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Brinquedos para Cães
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleCategoryClick('pet')}
                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    Ver Todos
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Gatos</div>
                                                        <ul>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('acessorio')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Acessórios para Gatos
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('racao')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Ração para Gatos
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('cama')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Camas para Gatos
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('brinquedo')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Brinquedos para Gatos
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleCategoryClick('pet')}
                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    Ver Todos
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="nav-item">
                                                        <div className="text-button-uppercase pb-1">Novidades</div>
                                                        <ul>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('petisco')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Petiscos
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('higiene')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Higiene
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('farmacia')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Farmácia
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleTypeClick('acessorio')}
                                                                    className={`link text-secondary duration-300 cursor-pointer`}
                                                                >
                                                                    Acessórios
                                                                </div>
                                                            </li>
                                                            <li>
                                                                <div
                                                                    onClick={() => handleCategoryClick('pet')}
                                                                    className={`link text-secondary duration-300 view-all-btn`}
                                                                >
                                                                    Ver Todos
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                                <div className="banner-ads-block grid sm:grid-cols-2 items-center gap-6 pt-6">
                                                    <div className="banner-ads-item bg-linear rounded-2xl relative overflow-hidden" onClick={() => handleCategoryClick('pet')}>
                                                        <div className="text-content py-14 pl-8 relative z-[1]">
                                                            <div className="text-button-uppercase text-white bg-red px-2 py-0.5 inline-block rounded-sm">Economize R$50</div>
                                                            <div className="heading6 mt-2">20% off <br />Coleção Pet</div>
                                                            <div className="body1 mt-2 text-secondary">
                                                                A partir de <span className='text-red'>R$59,99</span>
                                                            </div>
                                                            <div className="button-main mt-4">Comprar Agora</div>
                                                        </div>
                                                        <Image
                                                            src={'/images/other/bg-feature-pet.png'}
                                                            width={1000}
                                                            height={800}
                                                            alt='bg-img'
                                                            className='absolute left-0 top-0 w-full h-full object-cover'
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className={`${openSubNavMobile === 3 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(3)}
                                    >
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Loja
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(3)}
                                            >
                                                <Icon.CaretLeft />
                                                Voltar
                                            </div>
                                            <div className="list-nav-item w-full pt-3 pb-12">
                                                <div className="">
                                                    <div className="nav-link grid grid-cols-2 gap-5 gap-y-6 justify-between">
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-1">Navegação</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/breadcrumb-img'}
                                                                        className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb-img' ? 'active' : ''}`}
                                                                    >
                                                                        Loja com Imagem
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/breadcrumb1'}
                                                                        className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb1' ? 'active' : ''}`}
                                                                    >
                                                                        Loja Estilo 1
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/breadcrumb2'}
                                                                        className={`text-secondary duration-300 ${pathname === '/shop/breadcrumb2' ? 'active' : ''}`}
                                                                    >
                                                                        Loja Estilo 2
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/collection'}
                                                                        className={`text-secondary duration-300 ${pathname === '/shop/collection' ? 'active' : ''}`}
                                                                    >
                                                                        Coleção
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-1">Filtros</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/filter-canvas'}
                                                                        className={`text-secondary duration-300 ${pathname === '/shop/filter-canvas' ? 'active' : ''}`}
                                                                    >
                                                                        Filtro Lateral
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/filter-options'}
                                                                        className={`text-secondary duration-300 ${pathname === '/shop/filter-options' ? 'active' : ''}`}
                                                                    >
                                                                        Opções de Filtro
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/filter-dropdown'}
                                                                        className={`text-secondary duration-300 ${pathname === '/shop/filter-dropdown' ? 'active' : ''}`}
                                                                    >
                                                                        Filtro Dropdown
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/sidebar-list'}
                                                                        className={`text-secondary duration-300 ${pathname === '/shop/sidebar-list' ? 'active' : ''}`}
                                                                    >
                                                                        Lista Lateral
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-1">Layout da Loja</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/default'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/shop/default' ? 'active' : ''}`}
                                                                    >
                                                                        Loja Padrão
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/default-grid'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/shop/default-grid' ? 'active' : ''}`}
                                                                    >
                                                                        Loja em Grade
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/default-list'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/shop/default-list' ? 'active' : ''}`}
                                                                    >
                                                                        Loja em Lista
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/fullwidth'}
                                                                        className={`link text-secondary duration-300 cursor-pointer ${pathname === '/shop/fullwidth' ? 'active' : ''}`}
                                                                    >
                                                                        Loja Largura Total
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/shop/square'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/shop/square' ? 'active' : ''}`}
                                                                    >
                                                                        Loja Quadrada
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-1">Páginas</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/wishlist'}
                                                                        className={`text-secondary duration-300 ${pathname === '/wishlist' ? 'active' : ''}`}
                                                                    >
                                                                        Lista de Desejos
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/search-result'}
                                                                        className={`text-secondary duration-300 ${pathname === '/search-result' ? 'active' : ''}`}
                                                                    >
                                                                        Resultado da Busca
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/cart'}
                                                                        className={`text-secondary duration-300 ${pathname === '/cart' ? 'active' : ''}`}
                                                                    >
                                                                        Carrinho
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/login'}
                                                                        className={`text-secondary duration-300 ${pathname === '/login' ? 'active' : ''}`}
                                                                    >
                                                                        Login/Cadastro
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/forgot-password'}
                                                                        className={`text-secondary duration-300 ${pathname === '/forgot-password' ? 'active' : ''}`}
                                                                    >
                                                                        Esqueceu a Senha
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/order-tracking'}
                                                                        className={`text-secondary duration-300 ${pathname === '/order-tracking' ? 'active' : ''}`}
                                                                    >
                                                                        Rastrear Pedido
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/my-account'}
                                                                        className={`text-secondary duration-300 ${pathname === '/my-account' ? 'active' : ''}`}
                                                                    >
                                                                        Minha Conta
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="recent-product pt-3">
                                                        <div className="text-button-uppercase pb-1">Produtos Recentes</div>
                                                        <div className="list-product hide-product-sold  grid grid-cols-2 gap-5 mt-3">
                                                            {productData.filter(item => item.action === 'add to cart' && item.category === 'pet').slice(0, 2).map((prd, index) => (
                                                                <Product key={index} data={prd} type='grid' style='style-1' />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className={`${openSubNavMobile === 4 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(4)}
                                    >
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Produtos
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(4)}
                                            >
                                                <Icon.CaretLeft />
                                                Voltar
                                            </div>
                                            <div className="list-nav-item w-full pt-3 pb-12">
                                                <div className="">
                                                    <div className="nav-link grid grid-cols-2 gap-5 gap-y-6 justify-between">
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-1">Tipos de Produto</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/default'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/default' ? 'active' : ''}`}
                                                                    >
                                                                        Produto Padrão
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/sale'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/sale' ? 'active' : ''}`}
                                                                    >
                                                                        Produto em Promoção
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/countdown-timer'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/countdown-timer' ? 'active' : ''}`}
                                                                    >
                                                                        Contagem Regressiva
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/grouped'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/grouped' ? 'active' : ''}`}
                                                                    >
                                                                        Produtos Agrupados
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/bought-together'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/bought-together' ? 'active' : ''}`}
                                                                    >
                                                                        Comprados Juntos
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/out-of-stock'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/out-of-stock' ? 'active' : ''}`}
                                                                    >
                                                                        Produtos Esgotados
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/variable'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/variable' ? 'active' : ''}`}
                                                                    >
                                                                        Produtos Variáveis
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nav-item">
                                                            <div className="text-button-uppercase pb-1">Recursos</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/external'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/external' ? 'active' : ''}`}
                                                                    >
                                                                        Produto Externo
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/on-sale'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/on-sale' ? 'active' : ''}`}
                                                                    >
                                                                        Produto em Oferta
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/discount'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/discount' ? 'active' : ''}`}
                                                                    >
                                                                        Produto com Desconto
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/sidebar'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/sidebar' ? 'active' : ''}`}
                                                                    >
                                                                        Produto com Sidebar
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/fixed-price'}
                                                                        className={`text-secondary duration-300 ${pathname === '/product/fixed-price' ? 'active' : ''}`}
                                                                    >
                                                                        Produto Preço Fixo
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="nav-item col-span-2">
                                                            <div className="text-button-uppercase pb-1">Layout de Produtos</div>
                                                            <ul>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/thumbnail-left'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/product/thumbnail-left' ? 'active' : ''}`}
                                                                    >
                                                                        Miniaturas à Esquerda
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/thumbnail-bottom'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/product/thumbnail-bottom' ? 'active' : ''}`}
                                                                    >
                                                                        Miniaturas na Base
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/one-scrolling'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/product/one-scrolling' ? 'active' : ''}`}
                                                                    >
                                                                        Grade 1 com Rolagem
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/two-scrolling'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/product/two-scrolling' ? 'active' : ''}`}
                                                                    >
                                                                        Grade 2 com Rolagem
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/combined-one'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/product/combined-one' ? 'active' : ''}`}
                                                                    >
                                                                        Combinado 1
                                                                    </Link>
                                                                </li>
                                                                <li>
                                                                    <Link
                                                                        href={'/product/combined-two'}
                                                                        className={`link text-secondary duration-300 ${pathname === '/product/combined-two' ? 'active' : ''}`}
                                                                    >
                                                                        Combinado 2
                                                                    </Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    <div className="recent-product pt-4">
                                                        <div className="text-button-uppercase pb-1">Produtos Recentes</div>
                                                        <div className="list-product hide-product-sold  grid grid-cols-2 gap-5 mt-3">
                                                            {productData.filter(item => item.action === 'add to cart' && item.category === 'pet').slice(0, 2).map((prd, index) => (
                                                                <Product key={index} data={prd} type='grid' style='style-1' />
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className={`${openSubNavMobile === 5 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(5)}
                                    >
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Artigos
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(5)}
                                            >
                                                <Icon.CaretLeft />
                                                Voltar
                                            </div>
                                            <div className="list-nav-item w-full pt-2 pb-6">
                                                <ul className='w-full'>
                                                    <li>
                                                        <Link href="/blog/default" className={`text-secondary duration-300 ${pathname === '/blog/default' ? 'active' : ''}`}>
                                                            Blog Padrão
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog/list" className={`text-secondary duration-300 ${pathname === '/blog/list' ? 'active' : ''}`}>
                                                            Blog em Lista
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog/grid" className={`text-secondary duration-300 ${pathname === '/blog/grid' ? 'active' : ''}`}>
                                                            Blog em Grade
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog/detail1" className={`text-secondary duration-300 ${pathname === '/blog/detail1' ? 'active' : ''}`}>
                                                            Detalhe do Artigo 1
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/blog/detail2" className={`text-secondary duration-300 ${pathname === '/blog/detail2' ? 'active' : ''}`}>
                                                            Detalhe do Artigo 2
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li
                                        className={`${openSubNavMobile === 6 ? 'open' : ''}`}
                                        onClick={() => handleOpenSubNavMobile(6)}
                                    >
                                        <a href={'#!'} className='text-xl font-semibold flex items-center justify-between mt-5'>Páginas
                                            <span className='text-right'>
                                                <Icon.CaretRight size={20} />
                                            </span>
                                        </a>
                                        <div className="sub-nav-mobile">
                                            <div
                                                className="back-btn flex items-center gap-3"
                                                onClick={() => handleOpenSubNavMobile(6)}
                                            >
                                                <Icon.CaretLeft />
                                                Voltar
                                            </div>
                                            <div className="list-nav-item w-full pt-2 pb-6">
                                                <ul className='w-full'>
                                                    <li>
                                                        <Link href="/pages/about" className={`text-secondary duration-300 ${pathname === '/pages/about' ? 'active' : ''}`}>
                                                            Sobre Nós
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/pages/contact" className={`text-secondary duration-300 ${pathname === '/pages/contact' ? 'active' : ''}`}>
                                                            Contato
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/pages/store-list" className={`text-secondary duration-300 ${pathname === '/pages/store-list' ? 'active' : ''}`}>
                                                            Nossas Lojas
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/pages/page-not-found" className={`text-secondary duration-300 ${pathname === '/pages/page-not-found' ? 'active' : ''}`}>
                                                            404
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/pages/faqs" className={`text-secondary duration-300 ${pathname === '/pages/faqs' ? 'active' : ''}`}>
                                                            FAQs
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/pages/coming-soon" className={`text-secondary duration-300 ${pathname === '/pages/coming-soon' ? 'active' : ''}`}>
                                                            Em Breve
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link href="/pages/customer-feedbacks" className={`text-secondary duration-300 ${pathname === '/pages/customer-feedbacks' ? 'active' : ''}`}>
                                                            Avaliações de Clientes
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Spacer to push content below fixed header */}
            <div className="md:h-[134px] h-[64px]"></div>
        </>
    )
}

export default MenuPet