import React, {useState} from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import api from '../../services/api';

function Register (){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(event){
        event.preventDefault();

        const data = {
            name,
            email,
            whatsapp,
            city,
            uf
        }

        try{

        const response = await api.post('ongs', data);
        alert(`Seu id é ${response.data.id}`);
        history.push('/');

        } catch (error) {

            alert(`Error ${error}`)
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajuda pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041" />
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister}>

                    <input
                     value={name} 
                     onChange={event => setName(event.target.value)} 
                     type="text" 
                     placeholder="Nome da ONG" />

                    <input
                     value={email} 
                     onChange={event => setEmail(event.target.value)}
                     type="email" 
                     placeholder="E-mail" />

                    <input
                     value={whatsapp} 
                     onChange={event => setWhatsapp(event.target.value)}
                     type="text" 
                     placeholder="WhatsApp" />

                    <div className="input-group">

                        <input
                         value={city} 
                         onChange={event => setCity(event.target.value)} 
                         type="text" 
                         placeholder="Cidade" />

                        <input
                         value={uf} 
                         onChange={event => setUf(event.target.value)} 
                         type="text" 
                         placeholder="UF" style={{ width: 80 }} />
                    </div>

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}

export default Register;