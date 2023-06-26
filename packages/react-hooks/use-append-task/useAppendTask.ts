import { useState, useEffect } from "react";

export default function useAppend() {
  const [taskList, setTaskList] = useState([]);
  const [size, setSize] = useState(0);

  // adding a task to the queue
  const add = (newTask) => {
    setTaskList((taskList) => [...taskList, newTask]);
  };

  // this remove a task from the list
  const remove = (taskName) => {
    setTaskList((taskList) => taskList.filter((task) => task.name !== taskName));
  };

  // here we clear the queue
  const clear = () => {
    setTaskList([]);
  };

  // this update the size of the queue
  useEffect(() => {
    setSize(taskList.length);
  }, [taskList]);

  return { add, remove, clear, size, taskList };
}