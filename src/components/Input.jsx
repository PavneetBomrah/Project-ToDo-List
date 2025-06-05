import React, { useState } from 'react'

const Input = ({setTasks,tasks}) => {
    const [text,setText] = useState("")
    const handleSubmit = () =>  {
        if (text !== "") {
            setTasks([...tasks,{task:text,completed:false,pinned:false}]);
            setText("");
        }
        }
        window.addEventListener('keydown',(e)=>{
            if(e.key==='/'){
                    const element = document.querySelector(".myin");
                element.focus();
            }
        })

    addEventListener('keydown',(key)=>{
        if(key.key=='Enter'){
            handleSubmit()
        }
        })//Enter the Value

    return (
    <div className='bg-[var(--eerie-black-2)] px-5 pr-13 py-1 h-12 w-100 grid grid-cols-[1fr_30px] items-center rounded-xl text-[var(--white-2)] border-t-1 border-[var(--light-gray)]'>
        <input type="text" className=' outline-none' placeholder='Add a Task' value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={handleSubmit} className='bg-[var(--mustard-yellow)] hover:bg-[var(--golden-yellow)] w-fit px-5 py-1 rounded-xl transition-all text-[--light-gray]'>Add</button>
    </div>
  )
}

export default Input