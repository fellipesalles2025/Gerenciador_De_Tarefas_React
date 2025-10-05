import { ChevronRight, Trash2} from "lucide-react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"


function Tasks({tasks, onTaskClick, deleteTask}) {
    const navigate = useNavigate()

    function onSeeDetailsClick(task){
        
        navigate(`/task?title=${task.title}&description=${task.description}`)
    }

    return(
            <ul className="space-y-4 bg-slate-200 p-6 rounded-md shadow">
                {
                    tasks.map((task) => 
                    
                    <li key={task.id} className="flex gap-2">
                        
                        <button onClick={() => onTaskClick(task.id)} className={`p-2 bg-slate-400 text-white rounded-md w-full text-left ${task.isCompleted && "line-through"}`}>
                        
                            {task.title}
                        
                        </button>

                        <Button onClick={() => onSeeDetailsClick(task)} icon={<ChevronRight/>}/>

                        <Button onClick={() => deleteTask(task.id)} icon={<Trash2/>}/>
                    
                    </li>)
                }
            </ul>
    )
}
export default Tasks