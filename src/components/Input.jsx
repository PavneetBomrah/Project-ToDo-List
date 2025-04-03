import React, { useState } from 'react'

const Input = ({setTasks,tasks}) => {
    const [text,setText] = useState("")
    const handleSubmit = () =>  {
        if (text !== "") {
            setTasks([...tasks,{task:text,completed:false}]);
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
    <div className='flex justify-center mt-20 gap-5'>
        <input type="text" className='myin outline-0 border-2 w-90 text-white customborderred relative p-1 pl-5' placeholder='Enter your Task' value={text} onChange={(e) => setText(e.target.value)} />
        <button className='border-2 customborderred p-1 px-5 font-bold hover:bg- transition-all duration-300 hover:scale-115' onClick={handleSubmit} ><p className='customGradientText' style={{letterSpacing:"5px"}}>Submit</p></button>
    </div>
  )
}

export default Input