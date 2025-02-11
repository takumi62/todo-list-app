import { Task } from "../types"

interface TodoItemProps {
  task: Task
  deleteTaskCallback: () => void
  moveTaskUpCallback: () => void
  moveTaskDownCallback: () => void
  toggleTaskCompletionCallback: () => void
}

function TodoItem({
  task,
  deleteTaskCallback,
  moveTaskUpCallback,
  moveTaskDownCallback,
  toggleTaskCompletionCallback,
}: TodoItemProps) {
  return (
    <li aria-label="task">
      <input
        type="checkbox"
        aria-label="Task completion status"
        checked={task.completed}
        onChange={toggleTaskCompletionCallback}
      />
      <span className={`text ${task.completed ? 'completed' : ''}`}>{task.text}</span>
      <button
        type="button"
        aria-label="Delete task"
        className="delete-button"
        onClick={deleteTaskCallback}
      >
        🗑️
      </button>
      <button
        type="button"
        aria-label="Move task up"
        className="up-button"
        onClick={moveTaskUpCallback}
      >
        ⇧
      </button>
      <button
        type="button"
        aria-label="Move task down"
        className="down-button"
        onClick={moveTaskDownCallback}
      >
        ⇩
      </button>
    </li>
  )
}

export default TodoItem
