import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function TodoItem({
  item,
  handleCheckbox,
  handleEdit,
  handleDelete,
}) {
  return (
    <div className="todo flex w-full my-3 justify-between items-center gap-2 p-2 rounded-md transition hover:bg-white">
      <label
        htmlFor={`todo-${item.id}`}
        className="flex gap-3 max-w-full cursor-pointer w-full"
      >
        <input
          id={`todo-${item.id}`}
          name={item.id}
          onChange={handleCheckbox}
          type="checkbox"
          checked={item.isCompleted}
          className="accent-[#4C9A4C] w-4 h-4 rounded cursor-pointer mt-2"
        />
        <div
          className={`${
            item.isCompleted ? "line-through" : ""
          } break-words text-lg font-medium text-wrap flex-1`}
        >
          {item.todo}
        </div>
      </label>

      <div
        className="button flex h-full flex-shrink-0"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={(e) => handleEdit(e, item.id)}
          className="p-2 rounded-md mx-2 transition transform hover:scale-110 cursor-pointer"
        >
          <PencilSquareIcon className="h-5 w-5 text-[#C2A476] hover:text-[#a78b5f] transition-colors duration-200" />
        </button>

        <button
          onClick={(e) => handleDelete(e, item.id)}
          className="p-2 rounded-md mx-2 transition transform hover:scale-110 cursor-pointer"
        >
          <TrashIcon className="h-5 w-5 text-[#A34D4D] hover:text-[#912d2d] transition-colors duration-200" />
        </button>
      </div>
    </div>
  );
}
