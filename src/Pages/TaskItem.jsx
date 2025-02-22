import React from 'react';
import { useDrag, useDrop } from "react-dnd"
import { FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md';
import { Link } from 'react-router-dom';

const TaskItem = ({ task, index, moveTask }) => {
    const [, drag] = useDrag({
        type: "TASK",
        item: { id: task._id, index },
      });
    
      const [, drop] = useDrop({
        accept: "TASK",
        hover: (item) => {
          if (item.index !== index) {
            moveTask(item.id, task._id); // Move the task
            item.index = index; // Update the dragged task's position
          }
        },
      });

      const handleDelete = (id) => {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axios
              .delete(`${import.meta.env.VITE_API_URL}/viewtask/${id}`)
              .then((res) => {
                console.log(res.data);
    
                Swal.fire({
                  title: "Deleted!",
                  text: "Your Task has been deleted.",
                  icon: "success",
                });
    
                const remainingTasks = tasks.filter((task) => task._id !== id);
                setTask(remainingTasks);
              });
          }
        });
      };
    return (
        <div
        ref={(node) => drag(drop(node))}
        className="bg-teal-50 p-5 mb-5 shadow-md rounded-md flex flex-col lg:flex-row gap-6 justify-evenly items-center"
      >
        <h1>{index + 1}</h1>
        <h1 className="font-bold text-red-400 w-3/12 ">{task.title}</h1>
        <p className="w-4/12">{task.description}</p>
        <h3 className="">{task.timestamp}</h3>
        <h4 className="text-orange-600 border border-amber-300 p-3">
          {task.category}
        </h4>
        <Link to={`/edittask/${task._id}`}>
          <FaEdit></FaEdit>
        </Link>
        <button
          onClick={() => {
            handleDelete(task._id);
          }}
        >
          <MdDelete></MdDelete>
        </button>
      </div>
    );
};

export default TaskItem;