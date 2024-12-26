import React, { useState } from 'react';
import { PlusCircle, CheckCircle2, Circle, Trash2, Layout } from 'lucide-react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const addTask = (title: string) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const toggleTask = (id: number) => {
    setTasks(tasks.map(task => 
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Layout className="w-8 h-8 text-indigo-600" />
            <h1 className="text-4xl font-bold text-gray-900">Flowspace</h1>
          </div>
          <p className="text-gray-600">Streamline your workflow, one task at a time</p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8">
          <TaskInput onAdd={addTask} />
        </div>

        <div className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-lg p-6">
          <TaskList 
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </div>
      </div>
    </div>
  );
}

export default App;