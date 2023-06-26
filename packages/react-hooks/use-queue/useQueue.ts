import { useState } from "react";

function useQueue(initial = []) {
  const [queue, setQueue] = useState(initial);
  const first = queue[0];
  const last = queue[queue.length - 1];
  const size = queue.length;

  function add(item) {
    // add an item to the end of the queue
    setQueue([...queue, item]);
  }

  function remove() {
    // remove the first item in the queue
    setQueue(queue.slice(1));
  }

  function clear() {
    // clear the queue
    setQueue([]);
  }

  return { add, remove, clear, first, last, size, queue };
}

export default useQueue;