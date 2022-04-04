import React, { useState } from 'react'
import Formulario from '../components/fomulario'
import Cronometro from '../components/Cronometro'
import Lista from '../components/lista'
import style from './App.module.scss'
import { ITarefa } from '../types/tarefas'

function App() {

  const [ tarefas, setTarefas ] = useState<ITarefa[] | []>([]) // Tipo do useState pode ser ITarefa[] ou []
  const [ selecionado, setSelecionado ] = useState<ITarefa>()

  function selecionaTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada)
    // verifica sobre a tarefa anterior:  
    setTarefas(tarefasAnteriores =>  tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  return (
    <div className={style.AppStyle}>
     <Formulario setTarefas={setTarefas} />
     <Lista 
      tarefas={tarefas}
      selecionaTarefa={selecionaTarefa}
    />
     <Cronometro selecionado={selecionado} />
    </div>
  );
}

export default App;
