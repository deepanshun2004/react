import React, { useState, useEffect } from 'react';

function ClockApp() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const refreshTime = () => setTime(new Date());
    const timerId = setInterval(refreshTime, 1000);

    return () => clearInterval(timerId);
  }, []);

  const displayTime = time.toLocaleTimeString();

  return (
    <div style={appStyles.wrapper}>
      <h1 style={appStyles.heading}>Live Time</h1>
      <h2 style={appStyles.display}>{displayTime}</h2>
    </div>
  );
}

const appStyles = {
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
    color: '#222831',
    fontFamily: 'Arial, sans-serif',
    borderRadius: '15px',
    padding: '20px',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
  },
  heading: {
    fontSize: '2.5rem',
    fontWeight: '600',
    marginBottom: '15px',
    color: '#30475e',
    letterSpacing: '1.5px',
  },
  display: {
    fontSize: '4rem',
    fontWeight: '700',
    padding: '10px 20px',
    borderRadius: '8px',
    backgroundColor: '#f0f5f9',
    color: '#222831',
    textShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
  },
};

export default ClockApp;