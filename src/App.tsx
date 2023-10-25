import { FC, useEffect, useState } from 'react';

import './style.css';
import { Task, tasksService } from './services/tasksService';

export const App: FC = () => {
  const [tasks, setTasks] = useState<Task[]>()

  useEffect(() => {
    tasksService.getTasks(5).then(setTasks)
  }, [])
  
  return (
    <pre>{JSON.stringify(tasks, undefined, 4)}</pre>
  );
};
