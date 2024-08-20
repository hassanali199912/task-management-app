import { useState } from "react";

import avatar_img from "../img/avatar-images/avatar-1.jpeg";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

export default function Sidebar() {
  const [openMenue, setOpenMenue] = useState(false);
  const { pathname } = useLocation();
  const [userData, setUserData] = useState(null);
  const getUserData = () => {
    const data = JSON.parse(localStorage.getItem("user"));
    setUserData(data);
  };

  const logOut = () => {
    window.open(`http://localhost:8080/auth/logout`, "_self");
  };

  useEffect(() => {
    if (!userData) {
      getUserData();
    }
  }, []);
  return (
    <>
      <section className={`side-nav-bar ${openMenue && "active"} card`}>
        <nav>
          <div className="menue-div" onClick={() => setOpenMenue(!openMenue)}>
            <i className="fa-solid fa-arrow-right" />
          </div>
          <div className="profile-div">
            {userData ? (
              <>
                <img src={userData.picture} alt="profile-pic" />
                <p>{userData.name}</p>
              </>
            ) : (
              <>
                <img src={avatar_img} alt="profile-pic" />
                <p>hassan</p>
              </>
            )}
          </div>
          <div className="navegate-div">
            <ul>
              <li className={pathname === "/" ? "active" : ""}>
                <i className="fa-solid fa-house" />
                <Link to={"/"}>My Tasks </Link>
              </li>
              <li className={pathname === "/shared" ? "active" : ""}>
                <i className="fa-solid fa-users" />
                <Link to={"/shared"}>Shared </Link>
              </li>
            </ul>
          </div>
          <div className="logout-div" onClick={logOut}>
            <i className="fa-solid fa-right-from-bracket" />
            <a href="#" onClick={logOut}>
              Logout
            </a>
          </div>
        </nav>
      </section>
    </>
  );
}
