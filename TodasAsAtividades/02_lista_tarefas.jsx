import { useState } from 'react';

export default function TodoList() {
    const [tarefa, setTarefa] = useState("");
    const [lista, setLista] = useState([]);

    const adicionarTarefa = () => {
        if (tarefa.trim() !== "") {
            setLista([...lista, tarefa]);
            setTarefa("");
        }
    };

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial' }}>
            <h1>Minha Lista de Tarefas</h1>
            <input 
                type="text" 
                value={tarefa} 
                onChange={(e) => setTarefa(e.target.value)} 
                placeholder="Digite uma tarefa..."
            />
            <button onClick={adicionarTarefa}>Adicionar</button>
            <ul>
                {lista.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
}