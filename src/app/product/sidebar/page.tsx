'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import Sidebar from '@/components/Product/Detail/Sidebar';
import Footer from '@/components/Footer/Footer'
import { ProductType } from '@/type/ProductType'
import productData from '@/data/Product.json'

const ProductSidebar = () => {
    const searchParams = useSearchParams()
    let productId = searchParams.get('id')

    if (productId === null) {
        productId = '1'
    }

    return (
        <>
            <TopNavOne props="style-one bg-primary-blue-deep" slogan="Pawfect Pet Care - Cuidando do seu melhor amigo!" />
            <div id="header" className='relative w-full'>
                <MenuPet />
                <BreadcrumbProduct data={productData} productPage='sidebar' productId={productId} />
            </div>
            <Sidebar data={productData} productId={productId} />
            <Footer />
        </>
    )
}

export default ProductSidebar