import React from "react";
import { getTodos } from "../../../lib/todos";
import TodoItem from "../component/TodoItem";
import NewTodoForm from "../component/NewTodoForm";

const Page = async () => {
  const { todos } = await getTodos();

  return (
    <div className="container">
      <div className="mt-10 text-2xl font-semibold text-slate-700">
        To Do List
      </div>

      <NewTodoForm />
      <div className="text-xl font-semibold mt-8 border-b pb-2">
        {" "}
        My To Do List
      </div>
      <div className="mt-4 flex flex-col gap-1">
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default Page;
