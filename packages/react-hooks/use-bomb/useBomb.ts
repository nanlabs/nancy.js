import { useState } from "react";

interface Bomb {
  name: string;
  timer: number;
  initiated: boolean;
}

function generateNewBomb(): Bomb {
  const random = Math.floor(Math.random() * 1000) + 1000;
  return {
    name: "Bomb-" + random,
    timer: random,
    initiated: false,
  };
}

function useBomb() {
  const [bomb, setBomb] = useState<Bomb[]>([]);
  const size = bomb.length;

  function add() {
    setBomb((prevBomb) => [...prevBomb, generateNewBomb()]);
  }

  function remove(bombOn: Bomb) {
    // here we remove the bomb
    setBomb((prevBomb) => prevBomb.filter((bomb) => bomb.name !== bombOn.name));
  }

  function startBomb(bombOn: Bomb) {
    setBomb((prevBomb) =>
      prevBomb.map((bomb) => {
        if (bomb.name === bombOn.name) {
          return { ...bomb, initiated: true };
        }
        return bomb;
      })
    );

    const timer = setTimeout(() => {
      remove(bombOn);
    }, bombOn.timer);

    return () => clearTimeout(timer);
  }

  function clear() {
    // save bombs
    setBomb([]);
  }

  return { add, startBomb, clear, size, bomb };
}

export default useBomb;