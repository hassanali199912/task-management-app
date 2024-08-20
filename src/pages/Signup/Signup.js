import { Link } from "react-router-dom";
import facebook from "../../img/icons/facebook.svg";
import google from "../../img/icons/google.svg";

export default function Signup() {
  return (
    <>
      <section className="registers-section">
        <div className="login-container ">
          <div className="register-content">
            <h3>
              Tast Manegment <span> App</span>
            </h3>
            <h1>Let's Get Started</h1>
            <p>Sign up to the family and get startrd immedialtily</p>
            <div>
              <button className="btn">
                <i className="fa-brands fa-facebook-f" /> Sign up with Facebook
              </button>

              <h3 className="or">or</h3>

              <button className="btn">
                <img src={google} alt="google" />
                Sign up with Google
              </button>
            </div>
            <p>
              Already have an account?
              <Link to={"/login"}>Login</Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
