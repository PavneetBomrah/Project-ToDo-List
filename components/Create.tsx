"use client";

import { ArrowRight } from "lucide-react";
import { motion, useAnimationControls } from "framer-motion";
import { useRef, FormEvent, MouseEvent } from "react";
import type { Dispatch, SetStateAction } from "react";

export type TaskArr = {
  time: number;   // using number because of Date.now()
  name: string;
  done: boolean;
  pin: boolean;
};

type CreateProps = {
  tasks: TaskArr[];
  setTasks: Dispatch<SetStateAction<TaskArr[]>>;
};

export default function Create({ tasks, setTasks }: CreateProps) {
  const control = useAnimationControls();
  const formRef = useRef<HTMLFormElement | null>(null);

  const addTask = (name: string) => {
    const trimmed = name.trim();
    if (!trimmed) return;

    setTasks(prev => [
      ...prev,
      { time: Date.now(), name: trimmed, done: false, pin: false },
    ]);
  };

  const handleClick = async (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLDivElement>
  ) => {
    e.preventDefault();

    await control.start({ x: 50, y: 0, transition: { duration: 0.5 } });
    control.set({ x: -50, y: 0 });

    if (formRef.current) {
      const input = formRef.current.elements[0] as HTMLInputElement | undefined;
      const value = input?.value ?? "";
      await addTask(value);
      if (input) input.value = "";
    }

    await control.start({ x: 0, y: 0, transition: { duration: 0.5 } });
  };

  return (
    <div className="flex flex-col w-full gap-10 items-center">
      <h1 className="text-4xl text-amber-300 font-extrabold">TO-DO List</h1>

      <form
        ref={formRef}
        onSubmit={handleClick}
        className="w-full max-md:flex max-md:flex-col max-md:items-center"
      >
        <div className="border-t- border-t-white shadow-[0px_-3px_3px_white] flex items-center md:relative bg-[rgba(255,255,255,0.1)] md:p-2 p-1 pl-4 md:pl-5 md:pr-10 text-[rgb(200,200,200)] md:overflow-hidden outline-0 rounded-2xl border-2 w-full border-[#ffffff50]">
          <input
            type="text"
            className="outline-0 grow"
            placeholder="Enter Task"
            required
          />
          <div className="bg-yellow-600 max-md:hidden p-1 overflow-hidden absolute flex items-center right-0 h-full w-[35px]">
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={control}
              onClick={handleClick}
              whileHover={{ y: -5 }}
              transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <ArrowRight />
            </motion.div>
          </div>
        </div>

        <div
          className="bg-yellow-600 flex justify-center gap-5 rounded-md md:hidden w-1/2 mt-3 p-1"
          onClick={handleClick}
        >
          <span>Add</span>
          <div className="overflow-hidden">
            <motion.div
              initial={{ x: 0, y: 0 }}
              animate={control}
              whileHover={{ y: -5 }}
              transition={{ duration: 1, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
            >
              <ArrowRight />
            </motion.div>
          </div>
        </div>
      </form>
    </div>
  );
}
