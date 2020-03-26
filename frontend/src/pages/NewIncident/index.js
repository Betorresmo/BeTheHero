import React, {useState} from 'react';
import './style.css';
import logoImg from '../../assets/logo.svg';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import api from '../../services/api';

function NewIncident (){

    const history = useHistory();
    const ongId = localStorage.getItem('ongId');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [value, setValue] = useState('');

    async function handleNewIncident(event){
        event.preventDefault();

        const data = {
            title,
            description,
            value
        }

        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });
            alert('Caso registrado');
            history.push('/profile');            
            
        } catch (error) {
            alert(`Error ${error}`);
        }
    }
    
    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero"/>
                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
                    <Link className="back-link" to="/profile">
                        <FiArrowLeft size={16} color="#E02041" />
                        Voltar para home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    
                    <input
                     type="text" 
                     placeholder="Título do caso"
                     value={title}
                     onChange={event => setTitle(event.target.value)} />

                    <textarea
                     placeholder="Descrição"
                     value={description}
                     onChange={event => setDescription(event.target.value)} />

                    <input
                     type="text" 
                     placeholder="Valor em reais"
                     value={value}
                     onChange={event => setValue(event.target.value)} />

                    <button type="submit" className="button">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}


export default NewIncident;