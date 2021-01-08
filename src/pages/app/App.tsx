import React from 'react';
import style from './App.module.scss';
import { TaskPage } from '../task/task.page';


function App() {
  return (
    <div className={style.container}>
      <TaskPage />
    </div>
  );
}

export default App;
