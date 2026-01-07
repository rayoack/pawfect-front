'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import ShopSidebarList from '@/components/Shop/ShopSidebarList'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function SidebarList() {
    const searchParams = useSearchParams()
    const type = searchParams.get('type')
    const category = searchParams.get('category')

    return (
        <>
            <TopNavOne props="style-one bg-primary-blue-deep" slogan="Pawfect Pet Care - Cuidando do seu melhor amigo!" />
            <div id="header" className='relative w-full'>
                <MenuPet />
            </div>
            <ShopSidebarList data={productData} productPerPage={4} dataType={type} />
            <Footer />
        </>
    )
}
