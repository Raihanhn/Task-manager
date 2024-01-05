"use client";
import React from "react";
import { edit, trash } from "../../utils/Icons";

interface Props {
  title: string;
  description: string;
  date: string;
  isCompleted: boolean;
  id: string;
}

function TaskItem({ title, description, date, isCompleted, id }: Props) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p className="date">{date}</p>
      <div className="task-footer">
        {isCompleted ? (
          <button className="completed">Completed</button>
        ) : (
          <button className="incomplete">InComplete</button>
        )}
        <button className="edit">{edit}</button>
        <button className="delete">{trash} </button>
      </div>
    </div>
  );
}

export default TaskItem;
