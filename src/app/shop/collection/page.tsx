'use client'

import React, { useState } from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import productData from '@/data/Product.json'
import ShopCollection from '@/components/Shop/ShopCollection'
import Footer from '@/components/Footer/Footer'

export default function Collection() {

    return (
        <>
            <TopNavOne props="style-one bg-primary-blue-deep" slogan="Pawfect Pet Care - Cuidando do seu melhor amigo!" />
            <div id="header" className='relative w-full'>
                <MenuPet />
                <Breadcrumb heading='Shop Collection' subHeading='Collection' />
            </div>
            <ShopCollection data={productData} />
            <Footer />
        </>
    )
}
