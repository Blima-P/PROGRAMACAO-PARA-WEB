import React from 'react';
import './ListaTarefas.css';
import useListaTarefas from './useListaTarefas';

const ListaTarefas = () => {
  const {
    tarefas,
    novaTarefa,
    setNovaTarefa,
    adicionarTarefa,
    alternarConcluida,
    removerTarefa,
  } = useListaTarefas();

  return (
    <div className="container-lista">
      <h2>Minhas Tarefas</h2>
      
      <div className="input-group">
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="O que precisa ser feito?"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className={tarefa.concluida ? 'concluida' : ''}>
            <span onClick={() => alternarConcluida(tarefa.id)}>
              {tarefa.texto}
            </span>
            <button className="btn-remover" onClick={() => removerTarefa(tarefa.id)}>
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListaTarefas;