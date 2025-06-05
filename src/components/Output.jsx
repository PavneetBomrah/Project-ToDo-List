import React , { useState } from 'react'
import {Check,Trash, Pencil, Pin, PinOff} from 'lucide-react'
import { motion } from 'framer-motion'
const Output = ({setTasks,tasks}) => {
    const [pin,setPin] = useState([]);
    const handleDone = (id) => {
        setTasks(
            tasks.map((task,index)=>{
                if(task.task === id) 
                    return {...task,completed:!task.completed} 
                return task;
            })
        )
    }
    const handleEdit = (id) => {
        let newValue = prompt("Enter new task name",tasks[id].task);
        if(newValue !== null) {
            setTasks(
                tasks.map((task,index)=>{
                    if(task.task === id) 
                        return {...task,task:newValue} 
                    return task;
                })
            )
    }
}
    const handleDelete = (id) => {
        setTasks(tasks.filter((task,index)=>task.task!=id))
    }
    const handlePin = (id) =>{
        setTasks(
            tasks.map((task,index)=>{
                if(task.task === id)
                    return {...task,pinned:!task.pinned}
                return task;
            }))
        
    }
    const renderMeDaddy = (element,index)=>{
                    return(
                        <motion.div initial={{scale:0.5}} animate={{scale:1}} key={index} className={`flex gap-5 justify-between align-middle cursor-pointer select-none`}>
                            <motion.div className='flex gap-5'  onClick={()=>handleDone(element.task)}> 
                                <motion.div className={` w-[23px] h-[23px] rounded-full  border-[var(--charcoal)] border-[2px] flex items-center justify-center ${element.completed?'bg-[var(--golden-yellow)]':'bg-transparent'}`}>{element.completed?<Check strokeWidth="5" width={15} color='var(--jet)'/>:''}</motion.div>
                                <span className={`${element.completed?"line-through":""}`}>
                                    {element.task}                            
                                </span>
                            </motion.div>
                        <motion.div className="flex gap-1">
                            <motion.div className="w-0.5 h-full bg-[var(--light-gray-70)]"/>
                            <button className=' outline-0' onClick={()=>{handlePin(element.task)}}>{
                                element.pinned?
                                <PinOff color='var(--golden-yellow)'/>
                                :
                                <Pin color='var(--golden-yellow)' style={{transform:"rotate(45deg)"}}/>
                            }
                            </button>
                            <motion.div className='w-0.5 h-full bg-[var(--light-gray-70)]'/>
                            <button className=' outline-0' onClick={()=>{handleEdit(element.task)}}><Pencil color='var(--golden-yellow)'/></button>
                            <motion.div className="w-0.5 h-full bg-[var(--light-gray-70)]"/>
                            <button className='outline-0' onClick={()=>handleDelete(element.task)}><Trash color='var(--golden-yellow)'/></button>
                            <motion.div className="w-0.5 h-full bg-[var(--light-gray-70)]"/>
                        </motion.div>
                        </motion.div>
                    )
                }
  return (
    <motion.div className='text-white mt-10'>
        <motion.div className="flex flex-col gap-4">
            {/* Pinned (all) */}
            {tasks.filter(item => item.pinned).map(renderMeDaddy)}

            {/* Unpinned and NOT completed */}
            {tasks.filter(item => !item.pinned && !item.completed).map(renderMeDaddy)}

            {/* Unpinned and completed */}
            {tasks.filter(item => !item.pinned && item.completed).map(renderMeDaddy)}
        

        </motion.div>
    </motion.div>
  )
}

export default Output