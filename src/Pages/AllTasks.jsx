import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const AllTasks = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/viewtask").then((res) => {
      console.log(res.data);
      setTask(res.data);
    });
  }, []);

  return (
    <div className="w-10/12 mx-auto bg-amber-50 mt-5 font-bold rounded p-5 h-[80vh] py-10">
      {tasks?.map((task, index) => (
        <div key={task._id} className="bg-teal-50 p-5 shadow-md rounded-md flex gap-5 justify-evenly items-center">
            <h1>{index + 1}</h1>
          <h1 className="font-bold text-red-400">{task.title}</h1>
          <p>{task.description}</p>
          <h3>{task.timestamp}</h3>
          <h4 className="text-orange-600 border border-amber-300 p-3">{task.category}</h4>
          <button><FaEdit></FaEdit></button>
          <button><MdDelete></MdDelete></button>
        </div>
      ))}
    </div>
  );
};

export default AllTasks;
