import { useState } from "react";

function generateNewBomb() {
  const random = Math.floor(Math.random() * 1000) + 1000;
  return {
    name: "Bomb-" + random,
    timer: random,
    initiated: false,
  };
}

function useBomb() {
  const [bomb, setBomb] = useState([]);
  const size = bomb.length;

  function add() {
    setBomb([...bomb, generateNewBomb()]);
  }

  function remove({ bombOn }) {
    // remove the bomb
    setBomb(bomb.filter((bomb) => bomb.name !== bombOn.name))
  }

  function startBomb({ bombOn }) {
    setBomb(bomb.map((bomb) => {
      if (bomb.name === bombOn.name) {
        return { ...bomb, initiated: true };
      }
      return bomb;
    }));
    const timer = setTimeout(() => {
      remove({ bombOn });
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
