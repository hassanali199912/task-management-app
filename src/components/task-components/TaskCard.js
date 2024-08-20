import { useState } from "react";

export default function TaskCard({
  title,
  id,
  description,
  date,
  state,
  members,
  handleUpdate,
}) {
  const [showMembers, setShowMembers] = useState(false);

  console.log(members);
  return (
    <>
      <div className="col-lg-3 col-md-6 col-sm-12 col-12  p-1">
        <div className="task-card card">
          <div className="task-card-content-container">
            <h3>{title}</h3>
            <p>{description} </p>
          </div>
          <div className="task-card-container">
            <h6>{date}</h6>
            <div className="task-card-footer">
              {state ? (
                <>
                  <button className="state-btn btn success">Complete</button>
                </>
              ) : (
                <>
                  <button className="state-btn btn danger">Incomplete</button>
                </>
              )}

              <div className="control-buttons">
                <div className="task-card-content-members">
                  {members && members.length > 0 && (
                    <div
                      className="members-div"
                      onClick={() => setShowMembers(!showMembers)}
                    >
                      <img src={members[0].img} alt={members[0].name} />
                      <span className="member-count">+{members.length}</span>
                    </div>
                  )}
                  <div className={`display-members ${showMembers && "active"}`}>
                    <ul className="members-list">
                      {members.map((member, index) => (
                        <li key={index}>
                          <img src={member.img} alt={member.name} />
                          <p>{member.name}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* <button>
                  <i className="fa fa-user-plus" />
                </button> */}
                <button onClick={() => handleUpdate(id)}>
                  <i className="fa fa-edit" />
                </button>
                <button>
                  <i className="fa fa-trash" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
