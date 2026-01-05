'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import TopNavOne from '@/components/Header/TopNav/TopNavOne'
import MenuOne from '@/components/Header/Menu/MenuOne'
import Breadcrumb from '@/components/Breadcrumb/Breadcrumb'
import Footer from '@/components/Footer/Footer'
import * as Icon from "@phosphor-icons/react/dist/ssr"
import { useAuthStore } from '@/store/authStore'
import toast from 'react-hot-toast'

const Login = () => {
    const router = useRouter()
    const { login, isAuthenticated, loading, error, clearError } = useAuthStore()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    // Redirecionar se já estiver autenticado
    useEffect(() => {
        if (isAuthenticated) {
            router.push('/my-account')
        }
    }, [isAuthenticated, router])

    // Limpar erro quando componente desmontar
    useEffect(() => {
        return () => clearError()
    }, [clearError])

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        try {
            await login(formData.email, formData.password)
            toast.success('Login realizado com sucesso!')
            router.push('/my-account')
        } catch (err) {
            toast.error(error || 'Erro ao fazer login')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <TopNavOne props="style-one bg-primary-blue-deep" slogan="Bem-vindo à Pawfect Pet Care!" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Login' subHeading='Login' />
            </div>
            <div className="login-block md:py-20 py-10">
                <div className="container">
                    <div className="content-main flex gap-y-8 max-md:flex-col">
                        <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line">
                            <div className="heading4">Login</div>

                            {error && (
                                <div className="mt-4 p-3 bg-red/10 border border-red rounded-lg text-red">
                                    {error}
                                </div>
                            )}

                            <form className="md:mt-7 mt-4" onSubmit={handleSubmit}>
                                <div className="email">
                                    <input
                                        className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                                        name="email"
                                        type="email"
                                        placeholder="Email *"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="pass mt-5">
                                    <input
                                        className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                                        name="password"
                                        type="password"
                                        placeholder="Senha *"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="flex items-center justify-between mt-5">
                                    <div className='flex items-center'>
                                        <div className="block-input">
                                            <input
                                                type="checkbox"
                                                name='remember'
                                                id='remember'
                                            />
                                            <Icon.CheckSquare size={20} weight='fill' className='icon-checkbox' />
                                        </div>
                                        <label htmlFor='remember' className="pl-2 cursor-pointer">Lembrar-me</label>
                                    </div>
                                    <Link href={'/forgot-password'} className='font-semibold hover:underline text-primary-blue-vibrant'>
                                        Esqueceu sua senha?
                                    </Link>
                                </div>
                                <div className="block-button md:mt-7 mt-4">
                                    <button
                                        type="submit"
                                        className="button-main bg-primary-blue-deep hover:bg-primary-blue-vibrant"
                                        disabled={loading}
                                    >
                                        {loading ? 'Entrando...' : 'Entrar'}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="right md:w-1/2 w-full lg:pl-[60px] md:pl-[40px] flex items-center">
                            <div className="text-content">
                                <div className="heading4">Novo Cliente</div>
                                <div className="mt-2 text-secondary">
                                    Faça parte da nossa família! Cadastre-se hoje e desbloqueie benefícios exclusivos,
                                    ofertas especiais e experiências personalizadas para o seu pet.
                                </div>
                                <div className="block-button md:mt-7 mt-4">
                                    <Link
                                        href={'/register'}
                                        className="button-main bg-accent-orange-intense hover:bg-accent-orange-medium"
                                    >
                                        Criar Conta
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login