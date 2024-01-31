import React from 'react';
import '../App.css';

const Clock = ({ minutes, seconds }) => 
{
  const formattedMinutes = String(minutes).padStart(2, '0')
  const formattedSeconds = String(seconds).padStart(2, '0')

  return (
    <div className="timer">
      <center><h1>{`${formattedMinutes}:${formattedSeconds}`}</h1></center>
    </div>
  )
}

export default Clock;
