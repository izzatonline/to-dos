'use client'
import { Todo } from "@prisma/client";
import React, { useTransition } from "react";
import { deleteTodoAction, updateTodoAction } from "../_actions";

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  const [isPending, startTransition] = useTransition()
  return (
    <div className="flex justify-between gap-3">
      <div className="flex gap-2">
        <input id={todo.id} type="checkbox" defaultChecked={todo.isCompleted} onChange={(e) => startTransition(() => updateTodoAction(todo.id, e.target.checked))} className="peer h-4 w-4 cursor-pointer rounded border-gray-300 focus:ring-slate-600"/>
        <label htmlFor={todo.id} className="peer-checked:test-slate-500 peer-checked:line-through">
          {todo.title}
        </label>
      </div>
      <div className="text-sm">
        {todo.updatedAt.toLocaleString()}
      </div>
      <div className="">
        <button id={todo.id} className="rounded-md bg-red-400 text-black px-2 py-1 text-xs" onClick={() => deleteTodoAction(todo.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TodoItem;