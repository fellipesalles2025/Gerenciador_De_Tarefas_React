import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import {v4} from 'uuid';

function App(){

  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || [])

  //executa a função toda vez que um state é alterado
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])


  //Fazendo a requisição através de uma API placeholder
  /* useEffect(() => {
    
    async function fetchTaks() {
      
      const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
      
      const data = await response.json()

      setTasks(data)
    }

    fetchTaks()
  }, []) */

  //função para alterar o state tasks, precisa passar o parametro taskId, pois a função precisa identificar o id da tarefa que está sendo clicada
  function onTaskClick(taskId){

    //para cada elemento de tasks, retorna um elemento alterado
    const newTasks = tasks.map(task => {

      //Verfica se o id da task e o id passado na função são iguais. Se sim, altera a interface
      if(task.id === taskId){

        //retorna tudo da task e altera o atributo isCompleted
        return {...task, isCompleted: !task.isCompleted}

      }

      //caso passe pelo if, não é necessário atualizar a task
      return task
    })

    //atualiza o state com o elemento newTasks
    setTasks(newTasks)
  }

  function deleteTask(taskId){

    const newTasks = tasks.filter(task => task.id !== taskId)

    setTasks(newTasks)
  }

  function onAddTaskSubmit(title, description){
    const newTask = {
      id: v4(),
      title,
      description, //como o nome do parâmetro é o mesmo do atributo, não é preciso escrever title: title, por exemplo
      isCompleted: false
    }

    setTasks([...tasks, newTask])
  }

  return(
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">

      <div className="w-[500px] space-y-4">

        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>

        <AddTask onAddTaskSubmit={onAddTaskSubmit}/>
        
        <Tasks tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask} />
        
      </div>
    </div>
  )
}

export default App;