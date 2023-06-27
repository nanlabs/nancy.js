import { useState } from "react";

interface QueueItem {
  value: number;
}

function useQueue(initial: QueueItem[] = []) {
  const [queue, setQueue] = useState<QueueItem[]>(initial);
  const first = queue[0];
  const last = queue[queue.length - 1];
  const size = queue.length;

  function add(item: QueueItem) {
    // add an item to the end of the queue
    setQueue((prevQueue) => [...prevQueue, item]);
  }

  function remove() {
    // remove the first item in the queue
    setQueue((prevQueue) => prevQueue.slice(1));
  }

  function clear() {
    // clear the queue
    setQueue([]);
  }

  return { add, remove, clear, first, last, size, queue };
}

export default useQueue;