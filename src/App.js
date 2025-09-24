import React, { use, useEffect } from 'react';
import './style.css';
import { observer } from 'mobx-react-lite';
import { globalAppState } from './mobx/appState';

export const App = observer(() => {
  useEffect(() => {
    console.log(globalAppState?.obj?.name)
    globalAppState.updateState({mobile:10000000})
    console.log(globalAppState?.obj?.mobile)
    
  }, [])
  return (
    <>
      <p>Hello from app</p>
    </>
  )
})
export default App