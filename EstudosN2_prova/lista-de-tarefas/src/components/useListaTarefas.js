import { useState } from 'react';

const useListaTarefas = () => {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim() !== '') {
      const tarefa = {
        id: Date.now(),
        texto: novaTarefa,
        concluida: false,
      };
      setTarefas([...tarefas, tarefa]);
      setNovaTarefa(''); // Limpa o campo após adicionar
    }
  };

  const alternarConcluida = (id) => {
    const tarefasAtualizadas = tarefas.map((t) =>
      t.id === id ? { ...t, concluida: !t.concluida } : t
    );
    setTarefas(tarefasAtualizadas);
  };

  const removerTarefa = (id) => {
    const tarefasFiltradas = tarefas.filter((t) => t.id !== id);
    setTarefas(tarefasFiltradas);
  };

  return {
    tarefas,
    novaTarefa,
    setNovaTarefa,
    adicionarTarefa,
    alternarConcluida,
    removerTarefa,
  };
};

export default useListaTarefas;