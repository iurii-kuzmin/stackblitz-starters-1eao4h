export type Task = {
    name: string;
    progress: number;
    speed: number;
  };
  
  const responseTimeMs = 100;
  const tasksCount = 1000;
  
  const tasks: Task[] = [];
  for (let i = 0; i < tasksCount; i++) {
    tasks.push({ name: `Task ${i}`, progress: 0, speed: Math.random() * 10 });
  }
  
  class TasksService {
    async getTasks(limit: number): Promise<Task[]> {
      return new Promise((resolve) => {
        setTimeout(() => {
          tasks.forEach((task) => {
            task.progress =
              task.progress + task.speed > 100 ? 0 : task.progress + task.speed;
          });
          resolve(tasks.slice(0, limit));
        }, responseTimeMs);
      });
    }
  }
  
  export const tasksService = new TasksService();
  