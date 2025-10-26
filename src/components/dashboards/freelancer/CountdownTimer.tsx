import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [time, setTime] = useState(5025); // 1 hour, 23 minutes, 45 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600).toString().padStart(2, '0');
    const m = Math.floor((seconds % 3600) / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${h}:${m}:${s}`;
  };

  return (
    <h2 data-testid="countdown-timer" className="text-5xl font-bold text-brand-text animate-pulse">
      {formatTime(time)}
    </h2>
  );
};

export default CountdownTimer;
