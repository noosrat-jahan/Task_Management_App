import React, { useState } from "react";

const MainSection = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTask = {
        title,
        description,
        timestamp: new Date().toISOString(),
        category: "To-Do",
      };
      addTask(newTask);
      setTitle("");
      setDescription("");
    }
  };
  return (
    <div>
      <button className="border border-purple-700 rounded-md px-4 py-1">
        Add New Task +
      </button>

      <form onSubmit={handleSubmit} className="add-task-form mt-20  flex flex-col justify-center w-8/12 mx-auto border border-teal-200">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          required
          maxLength="50"
          className="h-20 p-4"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description (optional)"
          maxLength="200"
          rows={5}
          className="p-4 border border-blue-200"
        />
        <button type="submit" className="bg-teal-500 py-2 text-white font-bold">Add Task</button>
      </form>
    </div>
  );
};

export default MainSection;
