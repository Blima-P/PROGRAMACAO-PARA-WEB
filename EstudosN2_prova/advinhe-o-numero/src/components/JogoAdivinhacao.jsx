import React from 'react';
import './JogoAdivinhacao.css';
import useJogoAdivinhacao from './useJogoAdivinhacao';


const JogoAdivinhacao = () => {
  const {
    palpite,
    setPalpite,
    mensagem,
    verificarPalpite
  } = useJogoAdivinhacao();

  return (
    <div className="container-jogo">
      <h2>Jogo da Adivinhação</h2>
      <p className="mensagem">{mensagem}</p>
      
      <input
        type="number"
        value={palpite}
        onChange={(e) => setPalpite(e.target.value)}
        placeholder="Digite seu palpite"
      />
      
      <button onClick={verificarPalpite}>Verificar</button>
    </div>
  );
};

export default JogoAdivinhacao;