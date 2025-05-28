// App.js
import React, { useState } from 'react'
import Input from './components/Input.jsx'
import Output from './components/Output.jsx'

const App = () => {
  const [tasks, setTasks] = useState([])
    return (
      <div className='flex flex-col gap-10 items-center absolute top-1/3 left-1/2 -translate-1/2 bg-[var(--eerie-black-2)] border-2 border-[var(--jet)] rounded-[20px] py-10 px-5 w-105'>
        <div className="orbitron bg-clip-text text-4xl text-transparent" style={{backgroundImage:'var(--text-gradient-yellow)'}}>TO-DO LIST</div>
        <div className="flex flex-col w-fit">
          <Input setTasks={setTasks} tasks={tasks}/>
          <Output setTasks={setTasks} tasks={tasks}/>
        </div>
      </div>
    )
}

export default App