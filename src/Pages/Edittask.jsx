import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edittask = () => {
  const [task, setTask] = useState([]);
  const navigate = useNavigate()

  const { id } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/viewtask/${id}`).then((res) => {
      console.log(res.data);
      setTask(res.data);
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const category = form.category.value;
    const updatedTaskInfo = {
      title,
      description,
      category,
    };
    console.log(updatedTaskInfo);

    axios.put(`${import.meta.env.VITE_API_URL}/viewtask/${id}`, updatedTaskInfo).then((res) => {
      console.log(res.data);
      navigate("/alltasks")
    });
  };

 

  return (
    <div>
      <button className="mt-5 border border-purple-700 rounded-md px-6 py-1.5">
        Update Task
      </button>

      <form
        onSubmit={handleSubmit}
        className="add-task-form mt-5  flex flex-col justify-center w-8/12 mx-auto border border-teal-300"
      >
        <input
          type="text"
          name="title"
          defaultValue={task.title}
        //   onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          required
          maxLength="50"
          className="h-20 p-4"
        />
        <textarea
          name="description"
        //   onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description (optional)"
          maxLength="200"
          rows={5}
          className="p-4 border border-teal-200"
          defaultValue={task.description}
        />

        <label className="block font-medium text-left py-2 ml-3 text-teal-600">
          Add Progress Category
        </label>
        <select
          name="category"
          defaultValue={task.category}
          className="w-full border p-2 rounded h-16"
          value={task.category || "To-Do"}
          onChange={(e) => setTask({ ...task, category: e.target.value })}
        >
          <option value="To-Do">To-Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <button type="submit" className="bg-teal-500 py-2 text-white font-bold">
          Edit Task
        </button>
      </form>
    </div>
  );
};

export default Edittask;
