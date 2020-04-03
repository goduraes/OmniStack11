import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default class NewIncident extends Component {
  state = {
    title: '',
    description: '',
    value: ''
  }

  componentDidMount() {
    //verifica se esta logado
    //caso nao estaja o usuário é direcionado para o login
    const ongId = localStorage.getItem('ongId');
    if(!ongId){
      this.props.history.push('/');
    }
  }

  handleNewIncident = async (e) => {
    e.preventDefault();
    const ongId = localStorage.getItem('ongId');

    try {
      await api.post('incidents', this.state, {
        headers: {
          Authorization: ongId
        }
      });

      //redireciona para a pagina profile
      this.props.history.push('/profile');
    } catch (err) {
      alert('Erro ao cadastrar caso, tente novamente!');
    }
  }

  render() {
    return (
      <div className="new-incident-container">
        <div className="content">
          <section>
            <img src={logoImg} alt="Be The Hero" />

            <h1>Cadastrar novo caso</h1>
            <p>
              Descreva o caso detalhadamente para encontrar um
              herói para resolver isso.
          </p>

            <Link to="/profile" className="back-link">
              <FiArrowLeft size={16} color="#E02041" />
            Voltar para home
          </Link>
          </section>

          <form>
            <input
              placeholder="Título do caso"
              value={this.title}
              onChange={e => this.setState({title: e.target.value})}
            />
            <textarea
              placeholder="Descrição"
              value={this.description}
              onChange={e => this.setState({description: e.target.value})}
            />
            <input
              placeholder="Valor em reais"
              value={this.value}
              onChange={e => this.setState({value: e.target.value})}
            />

            <button onClick={this.handleNewIncident} className="button" type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    );
  }
}
