import React from "react";
import { Itarefa } from "../../types/tarefa";
import style from './Lista.module.scss'
import Item from './item'

interface Props {
  tarefas: Itarefa[],
  selecionaTarefa: (tarefaSelecionada: Itarefa) => void
}

function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2>Estudos do Dia</h2>
      <ul>
        {tarefas.map((item) => (
          <Item
            selecionaTarefa={selecionaTarefa}
            key={item.id}
            //pode ser assim :
            // tarefa = {item.tarefa}
            // tempo = {item.tempo}
            //ou pode ser assim:
            {...item}
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;
