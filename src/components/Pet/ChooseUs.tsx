import React from 'react'
import Image from 'next/image'

const ChooseUs = () => {
    return (
        <>
            <div className="choose-us-block md:pt-20 pt-14">
                <div className="container flex max-lg:flex-col max-lg:gap-y-8 items-center justify-between">
                    <div className="bg-img lg:w-7/12 lg:pr-[45px] md:w-1/2 w-5/6">
                        <Image
                            src={'https://placedog.net/715/660'}
                            width={1200}
                            height={1200}
                            alt='bg-img'
                            priority={true}
                            className='w-full'
                        />
                    </div>
                    <div className="content lg:w-5/12 lg:pl-[45px]">
                        <div className="heading3">Por Que Escolher a Pawfect Para Seu Pet</div>
                        <div className="heading6 font-normal text-secondary mt-3">Oferecemos o melhor cuidado para seus amados pets - Expertise incomparavel e servico excepcional.</div>
                        <div className="list-feature lg:mt-10 mt-6">
                            <div className="item flex items-center gap-5">
                                <div className="icon bg-primary-blue-vibrant/20 rounded-full">
                                    <i className="icon-foot md:text-3xl text-2xl flex items-center justify-center md:w-[68px] md:h-[68px] w-14 h-14"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">Produtos de Alta Qualidade</div>
                                    <div className="caption1 text-secondary mt-2">Nos comprometemos a oferecer produtos da mais alta qualidade para seus pets.</div>
                                </div>
                            </div>
                            <div className="item flex items-center gap-5 lg:mt-8 mt-4">
                                <div className="icon bg-accent-orange-medium/20 rounded-full">
                                    <i className="icon-food md:text-3xl text-2xl flex items-center justify-center md:w-[68px] md:h-[68px] w-14 h-14"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">Equipe Especializada</div>
                                    <div className="caption1 text-secondary mt-2">Nossa equipe apaixonada garante o bem-estar dos seus amigos peludos.</div>
                                </div>
                            </div>
                            <div className="item flex items-center gap-5 lg:mt-8 mt-4">
                                <div className="icon bg-accent-yellow-solar/30 rounded-full">
                                    <i className="icon-comb md:text-3xl text-2xl flex items-center justify-center md:w-[68px] md:h-[68px] w-14 h-14"></i>
                                </div>
                                <div className="text-content">
                                    <div className="heading6">Atendimento Personalizado</div>
                                    <div className="caption1 text-secondary mt-2">Entendemos que cada pet e unico e suas necessidades podem variar.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ChooseUs
