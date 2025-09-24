import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

export default function App() {
  const createTimer = () => {
    makeAutoObservable({
      secondsPassed: 0,
      increase() {
        this.secondsPassed += 1;
      },
      reset() {
        this.secondsPassed = 0;
      },
    });
  };
  const mytimer = createTimer();
  const TimerView = observer(({ timer }) => {
    return hello;
  });
  return (
    <div>
      <p>mobx</p>
      <TimerView timer={mytimer} />
    </div>
  );
}
