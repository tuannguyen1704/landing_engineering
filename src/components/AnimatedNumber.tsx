import { animate } from 'motion/react';
import { useEffect, useState } from 'react';

interface AnimatedNumberProps {
  value: number;
  suffix?: string;
  decimals?: number;
}

export default function AnimatedNumber({ value, suffix = "", decimals = 0 }: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplayValue(latest)
    });
    return () => controls.stop();
  }, [value]);

  return <span>{displayValue.toFixed(decimals)}{suffix}</span>;
}
