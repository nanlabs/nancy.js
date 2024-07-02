import { useState, useEffect } from "react";

interface Task {
  name: string;
}

export default function useAppend() {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [size, setSize] = useState<number>(0);

  // adding a task to the queue
  const add = (newTask: Task) => {
    setTaskList((prevTaskList) => [...prevTaskList, newTask]);
  };

  // this remove a task from the list
  const remove = (taskName: string) => {
    setTaskList((prevTaskList) =>
      prevTaskList.filter((task) => task.name !== taskName)
    );
  };

  // here we clear the queue
  const clear = () => {
    setTaskList([]);
  };

  // this updates the size of the queue
  useEffect(() => {
    setSize(taskList.length);
  }, [taskList]);

  return { add, remove, clear, size, taskList };
}
