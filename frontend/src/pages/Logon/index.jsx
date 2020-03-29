import React, { useState } from 'react'
import api from '../../services/api'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import './style.scss'

import logoImg from '../../assets/logo.svg'
import heroesImg from '../../assets/heroes.png'

export default function Logon (){
    const [
        id,
        setId,
    ] = useState('')
    const history = useHistory()

    async function handleLogin (e){
        e.preventDefault()

        const data = {
            id,
        }

        try {
            const response = await api.post('/sessions', data)
            // alert(`Entro com o login ${response.data.name}`)
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', response.data.name)
            history.push('/profile')
        } catch (error) {
            alert('Falha no Login')
        }
    }

    return (
        <React.Fragment>
            <div className='logon-container'>
                <section className='form'>
                    <img src={logoImg} alt='Be the Hero' />

                    <form onSubmit={handleLogin}>
                        <h1>Faça seu logon</h1>

                        <input
                            type='text'
                            placeholder='Sua ID'
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                        />
                        <button className='button' type='submit'>
                            Entrar
                        </button>

                        <Link className='back-link' to='/register'>
                            <FiLogIn size={16} color='#e02041' />
                            Não tenho cadastro
                        </Link>
                    </form>
                </section>

                <img src={heroesImg} alt='Heroes' />
            </div>
        </React.Fragment>
    )
}
