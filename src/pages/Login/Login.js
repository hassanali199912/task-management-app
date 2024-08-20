import facebook from "../../img/icons/facebook.svg";
import google from "../../img/icons/google.svg";

import { Link } from "react-router-dom";

export default function Login() {
  const handleGoogleLogin = () => {
    window.open(`http://localhost:8080/auth/google/callback`, "_self");
  };

  return (
    <>
      <section className="registers-section">
        <div className="login-container ">
          {/* <div className="login-card card">
            <h1>Login</h1>
            <form>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  placeholder="Enter your username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <div className="form-group">
                <button type="submit" className="btn">
                  Login
                </button>
              </div>
            </form>
          </div> */}
          <div className="register-content">
            <h3>
              Tast Manegment <span> App</span>
            </h3>
            <h1>It's Time To Finish Taskes </h1>
            <p>Login and continue share taskes with your team</p>
            <div>
              <button className="btn">
                <i className="fa-brands fa-facebook-f" /> Sign up with Facebook
              </button>

              <h3 className="or">or</h3>

              <button className="btn" onClick={handleGoogleLogin}>
                <img src={google} alt="google" />
                Sign up with Google
              </button>
            </div>
            <p>
              Don't have an account? <Link to={"/singup"}>SignIn</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
