'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import ShopFilterCanvas from '@/components/Shop/ShopFilterCanvas'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function FilterCanvasProductTwo() {
    const searchParams = useSearchParams()
    const type = searchParams.get('type')

    return (
        <>
            <TopNavOne props="style-one bg-primary-blue-deep" slogan="Pawfect Pet Care - Cuidando do seu melhor amigo!" />
            <div id="header" className='relative w-full'>
                <MenuPet />
            </div>
            <ShopFilterCanvas data={productData} productPerPage={12} dataType={type} productStyle='style-2' />
            <Footer />
        </>
    )
}
