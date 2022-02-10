import { useEffect, useState } from "react";

export default function TextCycle({
  inputs = [],
  interval = 10000,
  className,
}) {
  if (inputs.length < 0) return <></>;

  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const instance = setInterval(() => {
      setCurrent((c) => {
        console.log(c);

        return ++c % inputs.length;
      });
    }, interval);

    return () => {
      clearInterval(instance);
    };
  });

  return <span className={className}>{inputs[current]}</span>;
}
