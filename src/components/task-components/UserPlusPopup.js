export default function UserPlusPopup({ showMemberMenue, memberList }) {
  return (
    <>
      <div className={`user-plus-popup ${showMemberMenue && "active"} `}>
        <p>Share Tasks With Your Team</p>
        <hr />
        <form>
          <div className="mb-3">
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3 add-btn">
            <button>Add</button>
          </div>
        </form>
        <hr />
        <div className="user-plus-popup-menue-list">
          {memberList && memberList.length > 0 ? (
            <>
              {memberList.map((member, index) => (
                <div key={index} className="user-plus-popup-menue-list-box">
                  <img src={member.img} alt={member.name} />
                  <p>{member.name}</p>
                  <button>
                    <i className="fa fa-trash" aria-hidden="true" />
                  </button>
                </div>
              ))}
            </>
          ) : (
            <p className="text-center p-3" style={{ color: "#999" }}>
              No Members
            </p>
          )}
        </div>
      </div>
    </>
  );
}
