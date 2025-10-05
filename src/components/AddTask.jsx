import Input from "./Input"
import { useState } from "react"

function AddTask({onAddTaskSubmit}){

  const [title, setTitle] = useState("")

  const [description, setDescription] = useState("")

  //Só pode ter um elemento no return, por exemplo, uma div que engloba todos os elementos
  return(
    <div className="bg-slate-200 p-6 flex flex-col space-y-4 rounded-md shadow">

      {/* <input placeholder="Título da tarefa" className="px-4 py-2 rounded-md" value={title} onChange={(event) => setTitle(event.target.value)}/> */}

      <Input placeholder="Título da tarefa" value={title} onChange={(event) => setTitle(event.target.value)}/>

      <Input placeholder="Descrição da tarefa" value={description} onChange={(event) => setDescription(event.target.value)}/>

      <button onClick={() => {
        
        if(!title.trim() || !description.trim()){
          return alert("preencha o título e a descrição da tarefa")
        }
        
        onAddTaskSubmit(title, description)

        setTitle("")

        setDescription("")

      }
      } className="text-white bg-slate-600 px-4 py-2 rounded-md">Adicionar</button>
    </div>
  )
}

export default AddTask