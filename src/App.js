import React, { Component, Fragment } from 'react';
import Post from './components/Post';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [
        {
          id: '001',
          author: 'Cristiane Mayara',
          picture: 'https://content-static.upwork.com/uploads/2014/10/01073427/profilephoto1.jpg',
          date: 'há 5 min',
          text:
            'Caros amigos, a infinita diversidade da realidade única nos obriga à análise das condições epistemológicas e cognitivas exigidas. Por outro lado, a complexidade dos estudos efetuados cumpre um papel essencial na formulação da fundamentação metafísica das representações. Se estivesse vivo, Foucault diria que a inversão do modelo hybris-nêmesis exige a precisão e a definição do sistema de conhecimento geral. Ora, o novo modelo estruturalista aqui preconizado pressupõe a admissão da existência a priori da definição espinosista de substância.',
        },
        {
          id: '002',
          author: 'Cicrano',
          picture: 'https://www.veon.ie/wp-content/uploads/2016/06/hans.jpg',
          date: 'há 20 min',
          text:
            'Se, para Sócrates, o homem não era mais que sua alma, podemos sustentar que a teoria das pulsões ainda não demonstrou convincentemente como vai participar na mudança das condições epistemológicas e cognitivas exigidas. Seguindo o fluxo da corrente analítica anglo-saxônica, a complexidade dos estudos efetuados obstaculiza a apreciação da importância da corrente inovadora da qual fazemos parte. Deste modo, acabei de refutar a tese segundo a qual a consolidação das estruturas psico-lógicas exige a precisão e a definição das condições de suas incógnitas. Ora, o acompanhamento das preferências de consumo é condição necessária e suficiente da hipótese de que existem infinitos objetos.',
        },
        {
          id: '003',
          author: 'Fulano de Tal',
          picture: 'https://img2.thejournal.ie/inline/2470754/original/?width=428&version=2470754',
          date: 'há 30 min',
          text:
            'Todas estas questões, devidamente ponderadas, levantam dúvidas sobre se a teoria do utilitarismo nos arrasta ao labirinto de sofismas obscuros dos elementos envolvidos de maneira conclusiva? Nada se pode dizer a respeito.',
        },
      ],
    };
  }

  renderPosts() {
    const { posts } = this.state;
    return (
      <Fragment>
        <Header />
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </Fragment>
    );
  }

  render() {
    const { posts } = this.state;
    return posts.length > 0 ? this.renderPosts() : null;
  }
}

export default App;
