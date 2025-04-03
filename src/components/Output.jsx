import React from 'react'
import {X,Check,Trash, Pencil} from 'lucide-react'
const Output = ({setTasks,tasks}) => {
    const handleDone = (id) => {
        setTasks(
            tasks.map((task,index)=>{
                if(index === id) 
                    return {...task,completed:!task.completed} 
                return task;
            })
        )
    }
    const handleEdit = (id,value) => {
            setTasks(
                tasks.map((task,index)=>{
                    if(index === id) 
                        return {...task,task:value} 
                    return task;
                })
            )
    }
    const handleDelete = (id) => {
        setTasks(tasks.filter((task,index)=>index!=id))
    }
  return (
    <div className='text-white mt-10'>
        <div className="flex flex-col gap-4">
            {
                tasks.map((element,index)=>{
                    return(
                        <div key={index} className={`flex gap-5 justify-between align-middle ${element.completed?'customshadowgreen':'customshadowred'}`}><div className='flex gap-5'  onClick={()=>handleDone(index)}> {element.completed?<Check className='text-green-500'/>:<X className='text-red-500'/>} <span className={`${element.completed?"line-through":""}`}>{element.task}</span></div>
                        <div className="flex gap-2">
                            <button className='' onClick={()=>{ var newValue = prompt("Enter new task"); handleEdit(index,newValue);}}><Pencil className='text-yellow-500' /></button>
                            <button className='' onClick={()=>handleDelete(index)}><Trash className='text-blue-500'/></button>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Output