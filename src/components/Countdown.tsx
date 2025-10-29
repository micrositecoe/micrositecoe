import { useState, useEffect } from 'react';

const Countdown = () => {
  const targetDate = new Date('2025-10-31T17:00:00').getTime();
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="bg-gradient-to-br from-primary/10 to-accent/10 border border-primary/30 rounded-lg p-6 mb-8">
      <h3 className="text-xl font-semibold mb-4 text-center">Event Countdown</h3>
      <div className="flex justify-center gap-4">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Minutes', value: timeLeft.minutes },
          { label: 'Seconds', value: timeLeft.seconds }
        ].map((item, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-card border border-border rounded-lg p-4 min-w-[70px]">
              <span className="text-3xl font-bold text-primary">
                {String(item.value).padStart(2, '0')}
              </span>
            </div>
            <span className="text-sm text-muted-foreground mt-2">{item.label}</span>
          </div>
        ))}
      </div>
      <p className="text-center text-sm text-muted-foreground mt-4">
        31 October 2025 at 17:00
      </p>
    </div>
  );
};

export default Countdown;
