import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';
import logoImg from '../../../assets/logo.svg';

import api from '../../../services/api';

export default function NewIncident() {
    const ongId = localStorage.getItem('ongId');
    
    const [title, setTitle] = useState('');
    const [description, setDesc] = useState('');
    const [value, setValue] = useState('');

    const history = useHistory();

    async function handleSaveIncident(e) {
        e.preventDefault();

        const data = {
            title,
            description,
            value
        };
        try {
            await api.post('incidents', data, {
                headers: {
                    auth: ongId,
                }
            });
            history.push('/profile');
        } catch(err) {
            alert("Falha para criar um novo caso, tente novamente.")
        }
    }
    
    return (
        <div className="container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamento para encontrar um heroi para resolver isso.</p>

                    <Link to="/profile" className="back-link">
                        <FiArrowLeft size={16} color="#e02041"/>
                        Voltar para Home
                    </Link>
                </section>

                <form onSubmit={handleSaveIncident}>
                    <input
                        placeholder="Titulo do caso"
                        value={title}
                        onChange={e => setTitle(e.currentTarget.value)} />
                    <textarea
                        placeholder="Descicao"
                        value={description}
                        onChange={e => setDesc(e.currentTarget.value)} />
                    <input
                        placeholder="Valor em reais"
                        value={value}
                        onChange={e => setValue(e.currentTarget.value)} />
                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}