'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import Grouped from '@/components/Product/Detail/Grouped';
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'

const ProductGrouped = () => {
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
                <BreadcrumbProduct data={productData} productPage='grouped' productId={productId} />
            </div>
            <Grouped data={productData} productId={productId} />
            <Footer />
        </>
    )
}

export default ProductGrouped