import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
export default function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setshowFinished] = useState(true);

  useEffect(() => {
    const todoString = localStorage.getItem("todos");
    if (todoString) {
      setTodos(JSON.parse(todoString));
    }
  }, []);

  const saveToLS = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleAdd = () => {
    const newTodo = { id: uuidv4(), todo, isCompleted: false };
    const updatedTodos = [newTodo, ...todos];
    setTodos(updatedTodos);
    setTodo("");
    localStorage.setItem("todos", JSON.stringify(updatedTodos));
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const index = todos.findIndex((el) => el.id === id);
    const updatedTodos = [...todos];
    updatedTodos[index].isCompleted = !updatedTodos[index].isCompleted;
    setTodos(updatedTodos);
    saveToLS();
  };

  const handleEdit = (e, id) => {
    const t = todos.find((i) => i.id === id);
    setTodo(t.todo);
    const updated = todos.filter((item) => item.id !== id);
    setTodos(updated);
    saveToLS(updated);
  };

  const handleDelete = (e, id) => {
    const newTodos = todos.filter((el) => el.id !== id);
    setTodos(newTodos);
    saveToLS();
  };
  const toggleFinished = () => {
    setshowFinished(!showFinished);
  };
  return (
    <div className="min-h-full bg-[#ececec]">
      <Header />

      <header className=" shadow-sm">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            <TodoForm
              todo={todo}
              handleChange={handleChange}
              handleAdd={handleAdd}
            />
          </h1>
        </div>
      </header>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <TodoList
            todos={todos}
            setTodos={setTodos}
            showFinished={showFinished}
            handleCheckbox={handleCheckbox}
            handleEdit={handleEdit}
            handleDelete={handleDelete}
            toggleFinished={toggleFinished}
          />
        </div>
      </main>
    </div>
  );
}
