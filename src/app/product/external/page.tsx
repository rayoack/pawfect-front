'use client'
import React from 'react'
import { useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import BreadcrumbProduct from '@/components/Breadcrumb/BreadcrumbProduct'
import External from '@/components/Product/Detail/External';
import Footer from '@/components/Footer/Footer'
import productData from '@/data/Product.json'

const ProductExternal = () => {
    const searchParams = useSearchParams()
    let productId = searchParams.get('id')

    if (productId === null) {
        productId = '1'
    }

    return (
        <>
            <TopNavOne props="style-one bg-black" slogan="Novos clientes economizam 10% com o codigo PAWFECT10" />
            <div id="header" className='relative w-full'>
                <MenuPet props="bg-white" />
                <BreadcrumbProduct data={productData} productPage='external' productId={productId} />
            </div>
            <External data={productData} productId={productId} />
            <Footer />
        </>
    )
}

export default ProductExternal