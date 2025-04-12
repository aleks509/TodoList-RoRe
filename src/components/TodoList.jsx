import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

import TodoItem from "./TodoItem";

export default function TodoList({
  todos,
  setTodos,
  showFinished,
  handleCheckbox,
  handleEdit,
  handleDelete,
  toggleFinished,
}) {
  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const filteredTodos = todos.filter((t) => showFinished || !t.isCompleted);
    const fullIndexFrom = todos.indexOf(filteredTodos[result.source.index]);
    const fullIndexTo = todos.indexOf(filteredTodos[result.destination.index]);

    const updated = Array.from(todos);
    const [moved] = updated.splice(fullIndexFrom, 1);
    updated.splice(fullIndexTo, 0, moved);

    setTodos(updated);
  };

  const visibleTodos = todos.filter(
    (item) => showFinished || !item.isCompleted
  );

  return (
    <div>
      <div className="flex justify-end">
        <label className="flex items-center gap-2 mb-4">
          <input
            onChange={toggleFinished}
            type="checkbox"
            checked={showFinished}
            className="accent-[#C2A476] w-4 h-4 rounded"
          />
          <span>Завершённые</span>
        </label>
      </div>

      <div className="w-full">
        <h2 className="text-xl font-bold">Дела:</h2>

        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="todo-list">
            {(provided) => (
              <div
                className="Todos w-full overflow-x-hidden"
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {visibleTodos.length === 0 && (
                  <div className="flex justify-center items-center h-32 text-gray-500 text-lg">
                    Дел нет ¯\_(ツ)_/¯
                  </div>
                )}

                {visibleTodos.map((item, index) => (
                  <Draggable
                    key={item.id}
                    draggableId={item.id.toString()}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className="w-full"
                      >
                        <TodoItem
                          item={item}
                          handleCheckbox={handleCheckbox}
                          handleEdit={handleEdit}
                          handleDelete={handleDelete}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
}
