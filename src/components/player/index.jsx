import React from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";

export default function Player({ skin }) {
  const { direction, step, walk, position } = useWalk(3);
  const data = {
    h: 32,
    w: 32,
  };

  useKeyPress((event) => {
    const direction = event.key.replace("Arrow", "").toLowerCase();
    walk(direction);
    event.preventDefault();
  });
  return (
    <Actor
      sprite={`sprites/skins/${skin}.png`}
      data={data}
      step={step}
      direction={direction}
      position={position}
    />
  );
}
