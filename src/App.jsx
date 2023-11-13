import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const tarefas = [
  {
    id:'1', title:'Minha primeira tarefa'
  },
  {
    id:'2', title:'Minha segunda tarefa'
  },
  {
    id:'3', title:'Minha terceira tarefa'
  },
  {
    id:'4', title:'Minha quarta tarefa'
  },
  {
    id:'5', title:'Minha quinta tarefa'
  },
]

function App() {

  const [tarefas, setTarefas] = useState([])
 
  //Só vai ser executado uma única vez quando renderizado. Por isso a ,[]
  useEffect(()=>{

    async function buscarDados(){
      const result = await fetch('https://jsonplaceholder.typicode.com/todos')
      //Faz o parse do retorno e retorna
      const resultadoFinal = await result.json()
      return resultadoFinal
    }
    buscarDados().then(res=> setTarefas(res))
  },[])


  return (
    <>
      <div>
        <h1>Buscando dados</h1>
        <ol>
        {tarefas.map((item)=>{
          return(
            
            <li key={item.id} className='grade'>
              {item.title}
              {item.completed ? <p className='concluida'>Tarefa concluída.</p> : <p className='aberta'>Tarefa em aberto.</p>}
            </li>

          )
        })}
      </ol>
      </div>

    </>
  )
}

export default App
