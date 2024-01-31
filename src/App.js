import React, { useState, useEffect, useRef } from 'react';
import NavBar from './components/NavBar';
import Clock from './components/Clock';
import ActionRow from './components/ActionRow';
import 'materialize-css/dist/css/materialize.min.css';
import './App.css';

function App() {
  const [minutes, setMinutes] = useState(25)
  const [seconds, setSeconds] = useState(0)
  const [isWorkMode, setIsWorkMode] = useState(true)
  const [isActive, setIsActive] = useState(false)
  const timerRef = useRef(null)


  const minutesRef = useRef(minutes)
  const secondsRef = useRef(seconds)


  useEffect(() => {
    minutesRef.current = minutes
    secondsRef.current = seconds
  }, [minutes, seconds])

  const changeMode = (mode) => {
    setIsWorkMode(mode === 'work')
    setIsActive(false)
    setMinutes(mode === 'work' ? 25 : 5)
    setSeconds(0)
    clearInterval(timerRef.current)
  }

  const finished = () =>
   {
    if (minutesRef.current <= 0 && secondsRef.current <= 0) 
    {
      changeMode(isWorkMode ? 'break' : 'work')
    }
  }

  const tick = () => 
  {
    if (secondsRef.current === 0) 
    {
      if (minutesRef.current > 0) 
      {
        setMinutes(minutes => minutes - 1)
        setSeconds(59)
      } 
      else 
      {
        finished()
      }
    } 
    else 
    {
      setSeconds(seconds => seconds - 1)
    }
  }

  const start = () => 
  {
    if (!isActive) 
    {
      timerRef.current = setInterval(tick, 1000)
      setIsActive(true)
    }
  }

  const pause = () => 
  {
    clearInterval(timerRef.current)
    timerRef.current = null
    setIsActive(false)
  }


  return (
    <>
      <NavBar changeMode={changeMode} />
      <Clock minutes={minutes} seconds={seconds} />
      <ActionRow activateAction={isActive ? pause : start} resetClicked={() => changeMode(isWorkMode ? 'work' : 'break')} currentAction={isActive ? 'PAUSE' : 'START'} />
    </>
  )
}

export default App;
