'use client'
import React from 'react'
import Image from 'next/image';
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuPet from '@/components/Header/Menu/MenuPet'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb';
import Benefit from '@/components/Home1/Benefit'
import Brand from '@/components/Home1/Brand'
import Footer from '@/components/Footer/Footer'

const AboutUs = () => {
    return (
        <>
            <TopNavOne props="style-one bg-primary-blue-deep" slogan="Pawfect Pet Care - Cuidando do seu melhor amigo!" />
            <div id="header" className='relative w-full'>
                <MenuPet />
                <Breadcrumb heading='Quem Somos' subHeading='Quem Somos' />
            </div>
            <div className='about md:pt-20 pt-10'>
                <div className="about-us-block">
                    <div className="container">
                        <div className="text flex items-center justify-center">
                            <div className="content md:w-5/6 w-full">
                                <div className="heading3 text-center">Somos apaixonados por pets e dedicados a proporcionar o melhor para o seu melhor amigo.</div>
                                <div className="body1 text-center md:mt-7 mt-5">
                                    A Pawfect Pet Care nasceu do amor incondicional pelos animais de estimacao.
                                    Nossa missao e oferecer produtos de alta qualidade, servicos especializados e muito carinho
                                    para que seu pet tenha uma vida saudavel e feliz. Acreditamos que cada pet merece o melhor,
                                    e trabalhamos diariamente para ser a escolha perfeita para tutores que buscam excelencia
                                    em cuidados pet.
                                </div>
                            </div>
                        </div>
                        <div className="list-img grid sm:grid-cols-3 gap-[30px] md:pt-20 pt-10">
                            <div className="bg-img">
                                <Image
                                    src={'https://placedog.net/410/550'}
                                    width={2000}
                                    height={3000}
                                    alt='Cachorro feliz'
                                    className='w-full rounded-[30px] object-cover aspect-[3/4]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us2.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Tutor com pet'
                                    className='w-full rounded-[30px] object-cover aspect-[3/4]'
                                />
                            </div>
                            <div className="bg-img">
                                <Image
                                    src={'/images/other/about-us3.png'}
                                    width={2000}
                                    height={3000}
                                    alt='Gato com dona'
                                    className='w-full rounded-[30px] object-cover aspect-[3/4]'
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Nossa Historia */}
                <div className="container md:pt-20 pt-10">
                    <div className="flex flex-col md:flex-row items-center gap-10">
                        <div className="md:w-1/2">
                            <div className="heading3">Nossa Historia</div>
                            <div className="body1 text-secondary mt-5">
                                A Pawfect Pet Care foi fundada com um proposito claro: ser mais do que uma loja de produtos pet.
                                Queremos ser parceiros na jornada de cuidar de quem voce ama.
                            </div>
                            <div className="body1 text-secondary mt-4">
                                Desde o inicio, investimos em produtos de qualidade premium, equipe especializada e um
                                atendimento que entende as necessidades unicas de cada pet e tutor. Hoje, somos referencia
                                em cuidados pet, oferecendo desde alimentacao de alta qualidade ate servicos completos de
                                bem-estar animal.
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <Image
                                src={'/images/other/about-pawfect.png'}
                                width={600}
                                height={600}
                                alt='Quem Somos Pawfect'
                                className='w-full rounded-[30px]'
                            />
                        </div>
                    </div>
                </div>

                {/* Nossos Valores */}
                <div className="container md:pt-20 pt-10">
                    <div className="heading3 text-center mb-10">Nossos Valores</div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center p-6 bg-surface rounded-2xl">
                            <div className="w-16 h-16 bg-primary-blue-deep rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">&#10084;</span>
                            </div>
                            <div className="heading6">Amor pelos Animais</div>
                            <div className="body1 text-secondary mt-3">
                                Cada decisao que tomamos e guiada pelo amor e respeito aos animais de estimacao.
                            </div>
                        </div>
                        <div className="text-center p-6 bg-surface rounded-2xl">
                            <div className="w-16 h-16 bg-accent-orange-intense rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-white text-2xl">&#9733;</span>
                            </div>
                            <div className="heading6">Qualidade Premium</div>
                            <div className="body1 text-secondary mt-3">
                                Selecionamos apenas os melhores produtos e servicos para garantir a saude do seu pet.
                            </div>
                        </div>
                        <div className="text-center p-6 bg-surface rounded-2xl">
                            <div className="w-16 h-16 bg-accent-yellow-solar rounded-full flex items-center justify-center mx-auto mb-4">
                                <span className="text-black text-2xl">&#128522;</span>
                            </div>
                            <div className="heading6">Atendimento Especial</div>
                            <div className="body1 text-secondary mt-3">
                                Tratamos cada cliente e pet com a atencao e carinho que eles merecem.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Benefit props="md:pt-20 pt-10" />
            <Brand />
            <Footer />
        </>
    )
}

export default AboutUs
