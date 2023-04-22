import { useState, useEffect } from 'react'

interface Todo {
  userId: number
  id: number
  title: string
  completed: boolean
}

interface Props {
  data: Todo[]
}
const App: React.FC<Props> = ({ data }) => {
  const [todo, setTodo] = useState<Todo[]>(data)

  useEffect(() => {
    const interval = setTimeout(() => {
      setTodo(data.slice(0, 4))
    }, 1000)
    return () => clearTimeout(interval)
  }, [])
  return (
    <div>
      <h1>Todo:</h1>
      {todo.map((todo) => (
        <div key={todo.id}>
          <p>{todo.title}</p>
        </div>
      ))}
    </div>
  )
}

export default App
