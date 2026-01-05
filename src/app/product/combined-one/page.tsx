'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import VariableProduct from '@/components/Product/Detail/VariableProduct';
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'

const ProductCombinedOne = () => {
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
                <BreadcrumbProduct data={productData} productPage='variable' productId={productId} />
            </div>
            <VariableProduct data={productData} productId={productId} />
            <Footer />
        </>
    )
}

export default ProductCombinedOne