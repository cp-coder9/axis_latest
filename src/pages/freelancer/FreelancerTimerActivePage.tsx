import CountdownTimer from '@/components/dashboards/freelancer/CountdownTimer';
import { useEffect, useState } from 'react';

const FreelancerTimerActivePage = () => {
  const [key, setKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setKey(prevKey => prevKey + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4 text-brand-text">Active Timer</h1>
      <p className="text-gray-500 mb-8">This page is for the active time tracking.</p>
      <div key={key} className="p-6 bg-white rounded-lg shadow-md text-center">
        <CountdownTimer />
        <div className="mt-4">
          <button className="px-4 py-2 text-sm rounded-md bg-brand-primary text-white">Stop</button>
        </div>
      </div>
    </div>
  );
};

export default FreelancerTimerActivePage;
