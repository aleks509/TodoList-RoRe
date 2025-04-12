import { CheckIcon } from "@heroicons/react/24/outline";

export default function TodoForm({ todo, handleChange, handleAdd }) {
  return (
    <div className="addtodo my-5">
      <h2 className="text-lg font-bold">Добавь дело</h2>

      <div class="relative rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-[#C2A476]">
        <input
          onChange={handleChange}
          value={todo}
          type="text"
          placeholder="Вводим важное дело..."
          className="text-black rounded-r-none rounded-md w-3/4 h-8 pr-12 py-1.5 pl-1 text-base  placeholder:text-gray-400 placeholder:font-normal placeholder:text-sm focus:outline-none"
        />

        <button
          onClick={handleAdd}
          disabled={todo.length <= 2}
          className="absolute right-0 top-1 bottom-1 px-3 bg-[#C2A476] hover:bg-[#b29168] disabled:bg-[#d5c2a3] text-black font-semibold p-5 py-2 rounded-md mx-1 transition-colors duration-200 cursor-pointer"
        >
          <CheckIcon className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
