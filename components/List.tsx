"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CircleCheckBig, Pencil, Pin, PinOff, Trash2Icon } from "lucide-react";
import type { Dispatch, SetStateAction } from "react";

type TaskArr = {
  time: number;
  name: string;
  done: boolean;
  pin: boolean;
};

type ListProps = {
  tasks: TaskArr[];
  setTasks: Dispatch<SetStateAction<TaskArr[]>>;
};

export default function List({ tasks, setTasks }: ListProps) {
  function handleDone(task: TaskArr) {
    setTasks(prev =>
      prev.map(t =>
        t.name === task.name && t.time === task.time
          ? { ...t, done: !t.done }
          : t
      )
    );
  }

  function handleEdit(task: TaskArr) {
    const newName = prompt("Enter the new value", task.name);
    if (!newName || newName.trim() === "") return;

    setTasks(prev =>
      prev.map(t =>
        t.name === task.name && t.time === task.time
          ? { ...t, name: newName.trim() }
          : t
      )
    );
  }

  function handlePin(task: TaskArr) {
    setTasks(prev =>
      prev.map(t =>
        t.name === task.name && t.time === task.time
          ? { ...t, pin: !t.pin }
          : t
      )
    );
  }

  function handleDelete(task: TaskArr) {
    setTasks(prev =>
      prev.filter(t => !(t.name === task.name && t.time === task.time))
    );
  }

  return (
    <div className="w-full">
      <AnimatePresence>
        {tasks
          .filter(e => e.pin && !e.done)
          .map(element => (
            <motion.div
              key={element.time}
              className={`flex items-center gap-3 mt-1 justify-between w-full ${
                element.done
                  ? "line-through text-[rgba(255,255,255,0.4)] decoration-white"
                  : ""
              }`}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
              exit={{ x: 10, opacity: 0 }}
            >
              <div className="flex items-center gap-1">
                <button
                  className={`w-fit ${
                    element.done
                      ? "text-green-400"
                      : "text-[rgba(255,255,255,0.3)]"
                  }`}
                  onClick={() => handleDone(element)}
                >
                  <CircleCheckBig />
                </button>
                {element.name}
              </div>
              <div className="flex space-x-1">
                <button className="w-fit" onClick={() => handleEdit(element)}>
                  <Pencil />
                </button>
                <button
                  className={`w-fit ${
                    element.pin
                      ? "text-yellow-400 rotate-30"
                      : "text-[rgba(255,255,255,0.3)]"
                  }`}
                  onClick={() => handlePin(element)}
                >
                  {element.pin ? <PinOff /> : <Pin />}
                </button>
                <button
                  className="w-fit text-red-800"
                  onClick={() => handleDelete(element)}
                >
                  <Trash2Icon />
                </button>
              </div>
            </motion.div>
          ))}
      </AnimatePresence>

      <AnimatePresence>
        {tasks
          .filter(e => !e.done && !e.pin)
          .map(element => (
            <motion.div
              key={element.time}
              className={`flex items-center gap-3 mt-1 justify-between text-wrap ${
                element.done
                  ? "line-through text-[rgba(255,255,255,0.4)] decoration-white"
                  : ""
              }`}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
              exit={{ x: 10, opacity: 0 }}
            >
              <div className="flex items-center gap-1">
                <button
                  className={`w-fit ${
                    element.done
                      ? "text-green-400"
                      : "text-[rgba(255,255,255,0.3)]"
                  }`}
                  onClick={() => handleDone(element)}
                >
                  <CircleCheckBig />
                </button>
                <div>{element.name}</div>
              </div>
              <div className="flex space-x-1">
                <button className="w-fit" onClick={() => handleEdit(element)}>
                  <Pencil />
                </button>
                <button
                  className={`w-fit ${
                    element.pin
                      ? "text-yellow-400 rotate-30"
                      : "text-[rgba(255,255,255,0.3)]"
                  }`}
                  onClick={() => handlePin(element)}
                >
                  {element.pin ? <PinOff /> : <Pin />}
                </button>
                <button
                  className="w-fit text-red-800"
                  onClick={() => handleDelete(element)}
                >
                  <Trash2Icon />
                </button>
              </div>
            </motion.div>
          ))}
      </AnimatePresence>

      <AnimatePresence>
        {tasks
          .filter(e => e.done)
          .map(element => (
            <motion.div
              key={element.time}
              className={`flex items-center gap-3 mt-1 justify-between ${
                element.done
                  ? "line-through text-[rgba(255,255,255,0.4)] decoration-white"
                  : ""
              }`}
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opacity: 1, transition: { duration: 0.2 } }}
              exit={{ x: 10, opacity: 0 }}
            >
              <div className="flex items-center gap-1">
                <button
                  className={`w-fit ${
                    element.done
                      ? "text-green-400"
                      : "text-[rgba(255,255,255,0.3)]"
                  }`}
                  onClick={() => handleDone(element)}
                >
                  <CircleCheckBig />
                </button>
                {element.name}
              </div>
              <div className="flex space-x-1">
                <button className="w-fit" onClick={() => handleEdit(element)}>
                  <Pencil />
                </button>
                <button
                  className={`w-fit ${
                    element.pin
                      ? "text-yellow-400 rotate-30"
                      : "text-[rgba(255,255,255,0.3)]"
                  }`}
                  onClick={() => handlePin(element)}
                >
                  {element.pin ? <PinOff /> : <Pin />}
                </button>
                <button
                  className="w-fit text-red-800"
                  onClick={() => handleDelete(element)}
                >
                  <Trash2Icon />
                </button>
              </div>
            </motion.div>
          ))}
      </AnimatePresence>
    </div>
  );
}
