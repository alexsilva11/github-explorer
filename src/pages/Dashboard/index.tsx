import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';
import logoImg from '../../assets/logo.svg';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="logo" />
    <Title>Explore Repositórios no Github</Title>

    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>

    <Repositories>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/60552754?s=460&u=cd39e1b1bdb94e1fa08acd866e2955867911fc00&v=4"
          alt="Alex Silva"
        />

        <div>
          <strong>alexsilva11/repo</strong>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing el</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/60552754?s=460&u=cd39e1b1bdb94e1fa08acd866e2955867911fc00&v=4"
          alt="Alex Silva"
        />

        <div>
          <strong>alexsilva11/repo</strong>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing el</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/60552754?s=460&u=cd39e1b1bdb94e1fa08acd866e2955867911fc00&v=4"
          alt="Alex Silva"
        />

        <div>
          <strong>alexsilva11/repo</strong>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing el</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars2.githubusercontent.com/u/60552754?s=460&u=cd39e1b1bdb94e1fa08acd866e2955867911fc00&v=4"
          alt="Alex Silva"
        />

        <div>
          <strong>alexsilva11/repo</strong>
          <p>lorem ipsum dolor sit amet, consectetur adipiscing el</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
