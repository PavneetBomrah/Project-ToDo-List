// App.js
import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Input from './components/Input.jsx'
import Output from './components/Output.jsx'

const App = () => {
  const [tasks, setTasks] = useState([])
    return (
      <div className='flex flex-col gap-20 items-center'>
        <Header/>
        <div className="flex flex-col w-200">
          <Input setTasks={setTasks} tasks={tasks}/>
          <Output setTasks={setTasks} tasks={tasks}/>
        </div>
      </div>
    )
}

export default App