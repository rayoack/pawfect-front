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

const Register = () => {
    const router = useRouter()
    const { register, isAuthenticated, loading, error, clearError } = useAuthStore()
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        password: '',
        confirmPassword: '',
        telefone: '',
        agreeTerms: false
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

        // Validações
        if (formData.password !== formData.confirmPassword) {
            toast.error('As senhas não coincidem')
            return
        }

        if (formData.password.length < 8) {
            toast.error('A senha deve ter no mínimo 8 caracteres')
            return
        }

        if (!formData.agreeTerms) {
            toast.error('Você deve aceitar os termos de uso')
            return
        }

        try {
            await register({
                nome: formData.nome,
                email: formData.email,
                password: formData.password,
                telefone: formData.telefone || undefined
            })
            toast.success('Conta criada com sucesso!')
            router.push('/my-account')
        } catch (err) {
            toast.error(error || 'Erro ao criar conta')
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        })
    }

    return (
        <>
            <TopNavOne props="style-one bg-primary-blue-deep" slogan="Bem-vindo à Pawfect Pet Care!" />
            <div id="header" className='relative w-full'>
                <MenuOne props="bg-transparent" />
                <Breadcrumb heading='Criar Conta' subHeading='Criar Conta' />
            </div>
            <div className="register-block md:py-20 py-10">
                <div className="container">
                    <div className="content-main flex gap-y-8 max-md:flex-col">
                        <div className="left md:w-1/2 w-full lg:pr-[60px] md:pr-[40px] md:border-r border-line">
                            <div className="heading4">Cadastrar</div>

                            {error && (
                                <div className="mt-4 p-3 bg-red/10 border border-red rounded-lg text-red">
                                    {error}
                                </div>
                            )}

                            <form className="md:mt-7 mt-4" onSubmit={handleSubmit}>
                                <div className="name">
                                    <input
                                        className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                                        name="nome"
                                        type="text"
                                        placeholder="Nome completo *"
                                        value={formData.nome}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="email mt-5">
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
                                <div className="phone mt-5">
                                    <input
                                        className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                                        name="telefone"
                                        type="tel"
                                        placeholder="Telefone (opcional)"
                                        value={formData.telefone}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="pass mt-5">
                                    <input
                                        className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                                        name="password"
                                        type="password"
                                        placeholder="Senha (mínimo 8 caracteres) *"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="confirm-pass mt-5">
                                    <input
                                        className="border-line px-4 pt-3 pb-3 w-full rounded-lg"
                                        name="confirmPassword"
                                        type="password"
                                        placeholder="Confirmar senha *"
                                        value={formData.confirmPassword}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className='flex items-center mt-5'>
                                    <div className="block-input">
                                        <input
                                            type="checkbox"
                                            name='agreeTerms'
                                            id='agreeTerms'
                                            checked={formData.agreeTerms}
                                            onChange={handleChange}
                                        />
                                        <Icon.CheckSquare size={20} weight='fill' className='icon-checkbox' />
                                    </div>
                                    <label htmlFor='agreeTerms' className="pl-2 cursor-pointer text-secondary2">
                                        Eu concordo com os
                                        <Link href={'#!'} className='text-primary-blue-vibrant hover:underline pl-1'>
                                            Termos de Uso
                                        </Link>
                                    </label>
                                </div>
                                <div className="block-button md:mt-7 mt-4">
                                    <button
                                        type="submit"
                                        className="button-main bg-accent-orange-intense hover:bg-accent-orange-medium"
                                        disabled={loading}
                                    >
                                        {loading ? 'Criando conta...' : 'Criar Conta'}
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="right md:w-1/2 w-full lg:pl-[60px] md:pl-[40px] flex items-center">
                            <div className="text-content">
                                <div className="heading4">Já tem uma conta?</div>
                                <div className="mt-2 text-secondary">
                                    Bem-vindo de volta! Faça login para acessar sua experiência personalizada,
                                    preferências salvas e muito mais. Estamos felizes em tê-lo conosco novamente!
                                </div>
                                <div className="block-button md:mt-7 mt-4">
                                    <Link
                                        href={'/login'}
                                        className="button-main bg-primary-blue-deep hover:bg-primary-blue-vibrant"
                                    >
                                        Fazer Login
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

export default Register