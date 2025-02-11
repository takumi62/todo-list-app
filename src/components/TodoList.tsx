import React, { useState } from 'react'
import './TodoList.css'
import TodoItem from './TodoItem'
import { Task } from '../types' 

/** crypto.randomUUID() が使えない環境では、別途 uuidライブラリなどを利用してください。 */
const initialTasks: Task[] = [
  { id: crypto.randomUUID(), text: 'Drink some coffee', completed: false },
  { id: crypto.randomUUID(), text: 'Create a TODO app', completed: false },
  { id: crypto.randomUUID(), text: 'Drink some more coffee', completed: false },
]

function TodoList() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks)
  const [newTaskText, setNewTaskText] = useState<string>('')

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTaskText(event.target.value)
  }

  function addTask(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault() // フォームのsubmit動作を抑制

    if (newTaskText.trim() !== '') {
      setTasks((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          text: newTaskText,
          completed: false,
        },
      ])
      setNewTaskText('')
    }
  }

  function deleteTask(id: string) {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  function moveTaskUp(index: number) {
    if (index > 0) {
      setTasks((prev) => {
        const updated = [...prev]
        ;[updated[index], updated[index - 1]] = [updated[index - 1], updated[index]]
        return updated
      })
    }
  }

  function moveTaskDown(index: number) {
    if (index < tasks.length - 1) {
      setTasks((prev) => {
        const updated = [...prev]
        ;[updated[index], updated[index + 1]] = [updated[index + 1], updated[index]]
        return updated
      })
    }
  }

  function toggleTaskCompletion(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }
  return (
    <article className="todo-list" aria-label="task list manager">
      <header>
        <h1>TODO</h1>
        <form onSubmit={addTask} aria-controls="todo-list" className="todo-input">
          <input
            type="text"
            required
            placeholder="Enter a task"
            value={newTaskText}
            aria-label="Task text"
            onChange={handleInputChange}
          />
          <button className="add-button" aria-label="Add task">
            Add
          </button>
        </form>
      </header>

      <ol id="todo-list" aria-live="polite">
        {tasks.map((task, index) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTaskCallback={() => deleteTask(task.id)}
            moveTaskUpCallback={() => moveTaskUp(index)}
            moveTaskDownCallback={() => moveTaskDown(index)}
            toggleTaskCompletionCallback={() => toggleTaskCompletion(task.id)}
          />
        ))}
      </ol>
    </article>
  )
}

export default TodoList
