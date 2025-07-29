import { useState } from 'react';
function Todo() {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState([]);
  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, task]);
      setTask('');
    }
  };
  return (
    <>
      <h2>To-do-List</h2>
      <input value={task} onChange={(e) => setTask(e.target.value)} />
      <button onClick={addTask}>Add</button>
      <ul>
        {todos.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </>
  );
}
export default Todo;
