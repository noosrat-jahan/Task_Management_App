import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import TaskItem from "./TaskItem";
import { HTML5Backend } from 'react-dnd-html5-backend';


const AllTasks = () => {
  const [tasks, setTask] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_API_URL}/viewtask`).then((res) => {
      console.log(res.data);
      setTask(res.data);
    });
  }, []);

  

  const moveTask = (draggedId, targetId) => {
    const draggedTask = tasks.find((task) => task._id === draggedId);
    const targetIndex = tasks.findIndex((task) => task._id === targetId);
    const updatedTasks = [...tasks];

    // Move the dragged task to the new position
    updatedTasks.splice(targetIndex, 0, draggedTask);

    // Remove the dragged task from its old position
    const draggedIndex = tasks.findIndex((task) => task._id === draggedId);
    updatedTasks.splice(draggedIndex, 1);

    setTask(updatedTasks); // Update the state with the new task order

    // Optionally, send the new order to the server (if necessary)
    axios
      .put(`${import.meta.env.VITE_API_URL}/viewtask/order`, updatedTasks)
      .then((res) => {
        console.log("Tasks reordered in database:", res.data);
      });
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="w-full mx-auto bg-amber-50 pt-5 font-bold rounded p-10 lg:h-[80vh] py-10">
        {tasks?.map((task, index) => (
          <TaskItem
            key={task._id}
            task={task}
            index={index}
            moveTask={moveTask}
          />
          // <div
          //   key={task._id}

          //   className="bg-teal-50 p-5 mb-5 shadow-md rounded-md flex flex-col lg:flex-row gap-6 justify-evenly items-center"
          // >
          //   <h1>{index + 1}</h1>
          //   <h1 className="font-bold text-red-400 w-3/12 ">{task.title}</h1>
          //   <p className="w-4/12">{task.description}</p>
          //   <h3 className="">{task.timestamp}</h3>
          //   <h4 className="text-orange-600 border border-amber-300 p-3">
          //     {task.category}
          //   </h4>
          //   <Link to={`/edittask/${task._id}`}>
          //     <FaEdit></FaEdit>
          //   </Link>
          //   <button
          //     onClick={() => {
          //       handleDelete(task._id);
          //     }}
          //   >
          //     <MdDelete></MdDelete>
          //   </button>
          // </div>
        ))}
      </div>
    </DndProvider>
  );
};

export default AllTasks;
