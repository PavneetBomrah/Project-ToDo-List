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
                        <div key={index} className={`flex gap-5 justify-between align-middle cursor-pointer select-none`}>
                            <div className='flex gap-5'  onClick={()=>handleDone(index)}> 
                                <div className={` w-[23px] h-[23px] rounded-full  border-[var(--charcoal)] border-[2px] flex items-center justify-center ${element.completed?'bg-[var(--golden-yellow)]':'bg-transparent'}`}>{element.completed?<Check strokeWidth="5" width={15} color='var(--jet)'/>:''}</div>
                                <span className={`${element.completed?"line-through":""}`}>
                                    {element.task}                            
                                </span>
                            </div>
                        <div className="flex gap-1">
                            <div className='w-0.5 h-full bg-[var(--light-gray-70)]'/>
                            <button className=' outline-0' onClick={()=>{ var newValue = prompt("Enter new task"); handleEdit(index,newValue);}}><Pencil color='var(--golden-yellow)'/></button>
                            <div className="w-0.5 h-full bg-[var(--light-gray-70)]"/>
                            <button className='outline-0' onClick={()=>handleDelete(index)}><Trash color='var(--golden-yellow)'/></button>
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