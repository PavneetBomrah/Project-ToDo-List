"use client";

import { useState } from "react";
import Create from "@/components/Create";
import List from "@/components/List";
import { motion } from "framer-motion";

export default function Page() {
  const [tasks, setTasks] = useState([]);

  return (
    <div className="flex absolute md:top-1/5 bg-[rgba(255,255,255,0.03)] p-10 rounded-xl left-1/2 -translate-x-1/2 gap-10 top-1/6 items-center w-1/4 max-md:w-10/12 flex-col">
      <Create tasks={tasks} setTasks={setTasks} />
      {tasks.length>0 && <hr className="border-b-0.1 border-[rgba(255,255,255,0.3)] w-full"/>}
      {tasks.length>0 && <List tasks={tasks} setTasks={setTasks} />
      }
    </div>
  );
}
