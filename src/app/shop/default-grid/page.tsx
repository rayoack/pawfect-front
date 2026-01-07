'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import ShopBreadCrumb1 from '@/components/Shop/ShopBreadCrumb1'
import productData from '@/data/Product.json'
import Footer from '@/components/Footer/Footer'

export default function DefaultGrid() {
    const searchParams = useSearchParams()
    let type = searchParams.get('type')
    let gender = searchParams.get('gender')
    let category = searchParams.get('category')

    return (
        <>
            <TopNavOne props="style-one bg-primary-blue-deep" slogan="Pawfect Pet Care - Cuidando do seu melhor amigo!" />
            <div id="header" className='relative w-full'>
                <MenuPet />
            </div>
            <ShopBreadCrumb1 data={productData} productPerPage={9} dataType={type} gender={gender} category={category} />
            <Footer />      
        </>
    )
}
