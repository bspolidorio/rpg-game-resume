import React from "react";
import Sprite from "../sprite";

export default function Actor({
  sprite,
  data,
  position = { x: 0, y: 0 },
  step = 0,
  direction = 0,
}) {
  const { h, w } = data;
  return (
    <div>
      <Sprite
        image={sprite}
        position={position}
        data={{
          x: step * w,
          y: direction * h,
          w,
          h,
        }}
      />
    </div>
  );
}
