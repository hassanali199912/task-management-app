import AddTaskModule from "../../components/task-components/AddTaskModule";
import NotifcationItem from "../../components/task-components/NotifcationItem";
import TaskAddButton from "../../components/task-components/TaskAddButton";
import TaskCard from "../../components/task-components/TaskCard";

import { useEffect, useState } from "react";
import UpdateTaskModule from "../../components/task-components/UpdateTaskModule";

import avatar_img2 from "../../img/avatar-images/avatar-2.jpeg";
import avatar_img3 from "../../img/avatar-images/avatar-3.jpeg";
import avatar_img4 from "../../img/avatar-images/avatar-4.jpeg";
import avatar_img5 from "../../img/avatar-images/avatar-5.png";
import avatar_img6 from "../../img/avatar-images/avatar-6.png";

import avatar_img8 from "../../img/avatar-images/avatar-8.png";
import avatar_img10 from "../../img/avatar-images/avatar-10.jpeg";
import UserPlusPopup from "../../components/task-components/UserPlusPopup";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchTaskes } from "../../store/slices/taskesSlices";

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
    id: 4,
    title: "task 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    date: "06/12/2024",
    state: true,
  },
  {
    id: 5,
    title: "task 5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    date: "07/01/2024",
    state: false,
    members: [
      {
        img: avatar_img5,
        name: "ahmed sayed",
      },
      {
        img: avatar_img6,
        name: "omer mohamed",
      },
    ],
  },
  {
    id: 6,
    title: "task 6",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
    date: "07/01/2024",
    state: false,
  },
];

const NotificationsArray = [
  {
    id: 1,
    img: avatar_img2,
    name: "hassan ali",
    title: "add new task",
  },
  {
    id: 2,
    img: avatar_img5,
    name: "GG",
    title: "complete taske",
  },
  {
    id: 3,
    img: avatar_img8,
    name: "hassan ali",
    title: "delete task",
  },
];

const MembersArray = [
  {
    id: 1,
    img: avatar_img2,
    name: "hassan ali",
  },
  {
    id: 2,
    img: avatar_img3,
    name: "ibrahime ahmed",
  },
  {
    id: 3,
    img: avatar_img5,
    name: "omer adel",
  },
];
export default function Tasks() {
  //redux
  const { loading, taskes, error } = useSelector((state) => state.taskReducers);
  const dispatch = useDispatch();
  const [tasks, setTasks] = useState();

  const [memberMenue, setMemberMenue] = useState(false);
  const [notificationMenue, setNotificationMenue] = useState(false);
  const [show, setShow] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);
  const [updateTask, setUpdateTask] = useState({});

  const handleMenueClick = () => {
    if (notificationMenue) {
      setNotificationMenue(false);
    }
    setMemberMenue(!memberMenue);
  };

  const handleNotificationClick = () => {
    if (memberMenue) {
      setMemberMenue(false);
    }
    setNotificationMenue(!notificationMenue);
  };

  const handleUpdate = (id) => {
    setShowUpdate(true);

    TasksArray.map((task) => {
      if (task.id === id) {
        setUpdateTask({
          title: task.title,
          description: task.description,
          date: task.date,
        });
      }
    });
  };

  // const handleTestApi = async () => {
  //   try {
  //     const url = `http://localhost:8080/test`;
  //     const response = await axios.get(url, { withCredentials: true });
  //     console.log(response);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };

  const getAllTaskes = async () => {
    dispatch(fetchTaskes());
  };

  useEffect(() => {
    getAllTaskes();
  }, []);
  useEffect(() => {
    taskes && setTasks(taskes);
  }, [taskes]);

  return (
    <>
      <section className="task-section card">
        <div className="task-section-header card-header">
          <h4>All Tasks</h4>
          <div className="header-controls">
            <div className="memebers-plus">
              <button onClick={handleMenueClick}>
                <i className="fa-solid fa-user-plus" />
              </button>
              <UserPlusPopup
                showMemberMenue={memberMenue}
                memberList={MembersArray}
              />
            </div>
            <div className="notification-bell">
              <button onClick={handleNotificationClick}>
                <i className="fa-regular fa-bell" />
              </button>
              <div
                className={`notification-bell-popup ${
                  notificationMenue && "active"
                }`}
              >
                <p>Notifications</p>
                <hr />

                {NotificationsArray.length > 0 ? (
                  <div className="notifications-box">
                    {NotificationsArray.map((notification) => (
                      <NotifcationItem
                        key={notification.id}
                        img={notification.img}
                        name={notification.name}
                        title={notification.title}
                      />
                    ))}
                  </div>
                ) : (
                  <p className="text-center p-5" style={{ color: "#999" }}>
                    No Notifcations{" "}
                  </p>
                )}
              </div>
            </div>
            <button onClick={() => setShow(true)}>
              <i className="fa fa-plus" />
            </button>
          </div>
        </div>
        <div className="task-section-content card-body">
          <div className="row">
            {TasksArray.map((task) => (
              <TaskCard
                key={task.id}
                id={task.id}
                title={task.title}
                description={task.description}
                date={task.date}
                members={task.members ? task.members : []}
                state={task.state}
                handleUpdate={handleUpdate}
              />
            ))}

            <TaskAddButton handleClick={() => setShow(true)} />
          </div>
        </div>
      </section>
      <AddTaskModule show={show} onHide={() => setShow(false)} />
      <UpdateTaskModule
        key={updateTask}
        task={updateTask}
        show={showUpdate}
        onHide={() => {
          setShowUpdate(false);
          setUpdateTask({});
        }}
      />
    </>
  );
}
