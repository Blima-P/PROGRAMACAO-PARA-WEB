import { useState } from 'react';

const useJogoAdivinhacao = () => {
  // Gera um número aleatório entre 1 e 100 ao iniciar
  const [numeroSecreto] = useState(Math.floor(Math.random() * 100) + 1);
  const [palpite, setPalpite] = useState('');
  const [mensagem, setMensagem] = useState('Tente adivinhar o número entre 1 e 100!');
  const [tentativas, setTentativas] = useState(0);

  const verificarPalpite = () => {
    const numUsuario = parseInt(palpite);
    setTentativas(tentativas + 1);

    if (numUsuario === numeroSecreto) {
      setMensagem(`Parabéns! Você acertou em ${tentativas + 1} tentativas!`);
    } else if (numUsuario < numeroSecreto) {
      setMensagem('Dica: O número secreto é MAIOR.');
    } else {
      setMensagem('Dica: O número secreto é MENOR.');
    }
  };

  return {
    palpite,
    setPalpite,
    mensagem,
    verificarPalpite,
  };
};

export default useJogoAdivinhacao;