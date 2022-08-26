import { useEffect, useState } from "react";
import { Measure } from "./Measure";

const Anim = ({ frames }) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      const next = display + 1;
      if (next < frames.length) setDisplay(display + 1);
      else setDisplay(0);
    }, 150);
  });

  return <pre>{frames[display]}</pre>;
};

export const AAA = ({ aaaSrc }) => {
  const [frames, setFrames] = useState([]);
  useEffect(() => {
    setFrames(aaaSrc.split("\n@@@\n"));
  }, [setFrames, aaaSrc]);

  return (
    <div className="overflow-x-auto overflow-y-visible">
      <div>
        <Anim frames={frames} />
        <Measure frames={frames} />
      </div>
    </div>
  );
};
