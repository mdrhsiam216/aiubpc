import { useState, useEffect } from 'react';

export function Countdown({ deadline }: { deadline: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date(deadline).getTime();

    const tick = () => {
      const diff = Math.max(0, target - Date.now());
      setTimeLeft({
        days: Math.floor(diff / 86_400_000),
        hours: Math.floor((diff % 86_400_000) / 3_600_000),
        minutes: Math.floor((diff % 3_600_000) / 60_000),
        seconds: Math.floor((diff % 60_000) / 1_000),
      });
    };

    tick();
    const id = setInterval(tick, 1_000);
    return () => clearInterval(id);
  }, [deadline]);

  const units = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds },
  ];

  return (
    <div className="flex justify-center gap-8">
      {units.map((u) => (
        <div key={u.label} className="text-center">
          <span className="text-3xl md:text-4xl font-serif text-gray-900 block">
            {String(u.value).padStart(2, '0')}
          </span>
          <span className="text-xs font-mono uppercase tracking-widest text-gray-500">
            {u.label}
          </span>
        </div>
      ))}
    </div>
  );
}
