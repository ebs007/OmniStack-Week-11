import React, { useState } from 'react'
import api from '../../services/api'
import { FiArrowLeft } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'
import './style.scss'

import logoImg from '../../assets/logo.svg'

export default function NewIncedent (){
    const [
        title,
        setTitle,
    ] = useState('')
    const [
        description,
        setDescription,
    ] = useState('')
    const [
        value,
        setValue,
    ] = useState('')

    const history = useHistory()

    const ongId = localStorage.getItem('ongId')

    async function handleNewIncident (e){
        e.preventDefault()

        const data = {
            title,
            description,
            value,
        }

        try {
            const response = await api.post('/incidents', data, {
                headers : {
                    Authorization : ongId,
                },
            })

            history.push('/profile')
        } catch (error) {
            alert('Erro no Cadastro')
        }
    }

    return (
        <React.Fragment>
            <div className='new-incedent-container'>
                <div className='content'>
                    <section>
                        <img src={logoImg} alt='Be the Hero' />

                        <h1>Cadastrar novo caso</h1>
                        <p>
                            Descreva o caso detalhamente para encontrar um herói para
                            resolver isso.
                        </p>

                        <Link className='back-link' to='/profile'>
                            <FiArrowLeft size={16} color='#e02041' />
                            Voltar para home
                        </Link>
                    </section>

                    <form onSubmit={handleNewIncident}>
                        <input
                            placeholder='Título do caso'
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea
                            placeholder='Descrição'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                        <input
                            placeholder='Valor em reais'
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        />

                        <button className='button' type='submit'>
                            Cadastrar
                        </button>
                    </form>
                </div>
            </div>
        </React.Fragment>
    )
}