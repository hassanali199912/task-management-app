import { useState } from "react";

import avatar_img2 from "../../img/avatar-images/avatar-2.jpeg";
import avatar_img3 from "../../img/avatar-images/avatar-3.jpeg";
import avatar_img4 from "../../img/avatar-images/avatar-4.jpeg";
import avatar_img5 from "../../img/avatar-images/avatar-5.png";
import avatar_img6 from "../../img/avatar-images/avatar-6.png";

import avatar_img8 from "../../img/avatar-images/avatar-8.png";
import avatar_img10 from "../../img/avatar-images/avatar-10.jpeg";
import TaskShardCard from "../../components/task-components/TaskShardCard";

const TasksArray = [
  {
    id: 2,
    title: "task  1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
    date: "04/10/2024",
    members: [
      {
        img: avatar_img2,
        name: "hassan ali",
      },
      {
        img: avatar_img3,
        name: "ali hassan",
      },
      {
        img: avatar_img4,
        name: "mohamed ali",
      },
    ],
    state: true,
  },
  {
    id: 3,
    title: "task 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    date: "05/05/2024",
    state: false,
    members: [
      {
        img: avatar_img8,
        name: "hala jan",
      },
      {
        img: avatar_img10,
        name: "jon doe",
      },
    ],
  },
  {
    id: 3,
    title: "task 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    date: "05/05/2024",
    state: false,
    members: [
      {
        img: avatar_img8,
        name: "hala jan",
      },
      {
        img: avatar_img10,
        name: "jon doe",
      },
    ],
  },
];

export default function Shared() {
  return (
    <>
      <section className="task-section shared-tasks-section card">
        <div className="task-section-header card-header">
          <h4>Shared Tasks</h4>
        </div>
        <div className="task-section-content card-body">
          <div className="row">
            {TasksArray && TasksArray.length > 0 ? (
              <>
                {TasksArray.map((task) => (
                  <TaskShardCard
                    key={task.id}
                    title={task.title}
                    description={task.description}
                    date={task.date}
                    members={task.members ? task.members : []}
                    state={task.state}
                  />
                ))}
              </>
            ) : (
              <div className="col-lg-12 col-md-12 col-sm-12 col-12  p-5">
                <div className="task-card card d-flex justify-content-center align-items-center">
                  <p>No Tasks Shared Yet</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
