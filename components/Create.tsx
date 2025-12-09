"use client";

import { ArrowRight } from "lucide-react";
import {motion, useAnimationControls} from 'framer-motion'
import { useRef } from "react";
import type { Dispatch, SetStateAction } from "react";
type TaskArr = {
  time: Date;
  name: string;
  done: boolean;
  pin: boolean;
}

export default function Create({ tasks, setTasks }:{tasks:TaskArr,setTasks:Dispatch<SetStateAction<TaskArr[]>>}) {
  const control = useAnimationControls()
  const addTask = (name) => {
    if(!name || name.trim()=='') return
    setTasks([...tasks, { time:Date.now(), name:name, done:false, pin:false }]);
  };
  async function handleClick(e){
    e.preventDefault()
    await control.start({x:50,y:0,transition:{duration:0.5}})
    control.set({x:-50,y:0})
    await addTask(formRef.current[0].value)
    formRef.current[0].value = ''
    await control.start({x:0,y:0,transition:{duration:0.5}})
  }
  const formRef = useRef()

  return (
    <div className="flex flex-col w-full gap-10 items-center">
      <h1 className="text-4xl text-amber-300 font-extrabold">TO-DO List</h1>
      <form action="" ref={formRef} onSubmit={handleClick} className="w-full max-md:flex max-md:flex-col max-md:items-center">
        <div className=" border-t- border-t-white shadow-[0px_-3px_3px_white] flex items-center md:relative bg-[rgba(255,255,255,0.1)] md:p-2 p-1 pl-4 md:pl-5 md:pr-10 text-[rgb(200,200,200)] md:overflow-hidden outline-0 rounded-2xl border-2 w-full border-[#ffffff50]">
          <input type="text" className="outline-0 grow" placeholder="Enter Task" required/>
          <div
            className="bg-yellow-600  max-md:hidden p-1 overflow-hidden absolute flex items-center right-0 h-full w-[35px]"
          >
            <motion.div
            initial={{x:0,y:0}}
            animate={control}
            onClick={handleClick}
            whileHover={{y:-5,transition:{delay:0.5},repeatCount:Infinity}}
            transition={{duration:1}}
            >
              <ArrowRight className=""/>
            </motion.div>
          </div>
        </div>
          <div
            className="bg-yellow-600 flex justify-center gap-5 rounded-md md:hidden w-1/2 mt-3 p-1"
            onClick={handleClick}
          >
            <span>Add</span>
            <div className=" overflow-hidden">
              <motion.div
              initial={{x:0,y:0}}
              animate={control}
              whileHover={{y:-5,transition:{delay:0.5},repeatCount:Infinity}}
              transition={{duration:1}}
              >
                <ArrowRight className=""/>
              </motion.div>
            </div>
          </div>
      </form>
    </div>
  );
}
