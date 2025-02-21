import axios from "axios";
import React, { useState } from "react";

const MainSection = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("To-Do");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;

    if (title.trim() && title.length <= 50) {
      const newTask = {
        title,
        description,
        timestamp: new Date().toISOString(),
        category, // Dynamically set category
      };

      console.log(newTask)
     
      axios.post('http://localhost:5000/addtask', newTask)
      .then(res=>{
        console.log(res.data)
      })

    }
  };

  return (
    <div className="py-10">
      <button className="mt-5 border border-purple-700 rounded-md px-4 py-1">
        Add New Task +
      </button>

      <form
        onSubmit={handleSubmit}
        className="add-task-form mt-5  flex flex-col justify-center w-8/12 mx-auto border border-teal-200"
      >
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          required
          maxLength="50"
          className="h-20 p-4"
        />
        <textarea
          name="description"
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description (optional)"
          maxLength="200"
          rows={5}
          className="p-4 border border-blue-200"
        />

        <label className="block font-medium text-left py-2 ml-3 text-teal-600">
          Category
        </label>
        <select
          
          name="category"
          className="w-full border p-2 rounded h-16"
        >
          <option value="To-Do">To-Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <button type="submit" className="bg-teal-500 py-2 text-white font-bold">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default MainSection;
