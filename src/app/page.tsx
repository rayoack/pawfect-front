import React from 'react'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import SliderPet from '@/components/Slider/SliderPet'
import Banner from '@/components/Pet/Banner'
import Collection from '@/components/Pet/Collection'
import productData from '@/data/Product.json'
import TabFeatures from '@/components/Pet/TabFeatures'
import ChooseUs from '@/components/Pet/ChooseUs'
import Banner2 from '@/components/Pet/Banner2'
import FeatureProduct from '@/components/Pet/FeatureProduct'
import Benefit from '@/components/Home1/Benefit'
import Instagram from '@/components/Pet/Instagram'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'
import ModalNewsletter from '@/components/Modal/ModalNewsletter'

// Fetch data from Strapi (Server Component)
async function fetchStrapiData() {
  const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'

  try {
    // Fetch banners
    const bannersRes = await fetch(`${STRAPI_URL}/api/banners?populate=*`, {
      next: { revalidate: 60 } // Cache for 60 seconds
    })
    const bannersData = bannersRes.ok ? await bannersRes.json() : null

    // Fetch categories
    const categoriesRes = await fetch(`${STRAPI_URL}/api/categories?populate=*`, {
      next: { revalidate: 60 }
    })
    const categoriesData = categoriesRes.ok ? await categoriesRes.json() : null

    // Fetch products
    const productsRes = await fetch(`${STRAPI_URL}/api/products?populate=*`, {
      next: { revalidate: 60 }
    })
    const productsData = productsRes.ok ? await productsRes.json() : null

    // Fetch showcases
    const showcasesRes = await fetch(`${STRAPI_URL}/api/showcases?populate=*`, {
      next: { revalidate: 60 }
    })
    const showcasesData = showcasesRes.ok ? await showcasesRes.json() : null

    return {
      banners: bannersData?.data || [],
      categories: categoriesData?.data || [],
      products: productsData?.data || [],
      showcases: showcasesData?.data || []
    }
  } catch (error) {
    console.error('Error fetching Strapi data:', error)
    return {
      banners: [],
      categories: [],
      products: [],
      showcases: []
    }
  }
}

export default async function Home() {
  const strapiData = await fetchStrapiData()

  // Use Strapi data if available, fallback to productData
  const products = strapiData.products.length > 0 ? strapiData.products : productData

  return (
    <>
      <TopNavOne props="style-one bg-primary-blue-deep" slogan='🐾 Bem-vindo à Pawfect Pet Care - Tudo para o seu melhor amigo!' />
      <div id="header" className='relative w-full style-pet'>
        <MenuPet />
        <SliderPet />
      </div>
      <Banner banners={strapiData.banners} />
      <Collection categories={strapiData.categories} />
      <TabFeatures data={products} start={0} limit={4} />
      <ChooseUs />
      <Banner2 />
      {/* <FeatureProduct data={products} start={0} limit={4} /> */}
      {/* <Benefit props="md:mt-20 mt-10 md:pt-20 pt-10 border-t border-line" />
      <Instagram /> */}
      <Brand />
      {/* <Footer /> */}
      <ModalNewsletter />
    </>
  )
}
