import { useEffect } from "react";

export const Measure = ({ frames }) => {
  useEffect(() => {}, []);
  return (
    <pre className={`invisible h-4 overflow-y-hidden`}>
      {frames.map((item, index) => (
        <div key={`${index}`}>{item}</div>
      ))}
    </pre>
  );
};
