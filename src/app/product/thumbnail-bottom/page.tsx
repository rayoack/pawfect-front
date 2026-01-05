'use client'
import React, { useState } from 'react'
import { useSearchParams } from 'next/navigation';
import Link from 'next/link'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import Sale from '@/components/Product/Detail/Sale';
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'

const ProductThumbnailBottom = () => {
    const searchParams = useSearchParams()
    let productId = searchParams.get('id')

    if (productId === null) {
        productId = '1'
    }

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Novos clientes economizam 10% com o codigo PAWFECT10" />
            <div id="header" className='relative w-full'>
                <MenuPet />
                <BreadcrumbProduct data={productData} productPage='sale' productId={productId} />
            </div>
            <Sale data={productData} productId={productId} />
            <Footer />
        </>
    )
}

export default ProductThumbnailBottom