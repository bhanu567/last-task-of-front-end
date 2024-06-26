import React, { useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import { logInHandler } from "../../store/functions/login_signup";
import eyeImage from "../../image/eye.png";
import useLogIn from "../../store/hooks/logIn";

const LogIn = () => {
  const navigate = useNavigate();

  // const loginHandler = async (e) => {
  //   e.preventDefault();
  //   const email = emailRef.current.value;
  //   const password = passwordRef.current.value;
  //   if (password.length > 7) {
  //     try {
  //       const response = await logInHandler(email, password);
  //       if (response.error) {
  //         throw response.error;
  //       } else {
  //       }
  //       alert(
  //         `You have successfully logged in with email "${response.email}" `
  //       );
  //       localStorage.setItem("idToken", response.idToken);
  //       navigate("/", { replace: true });
  //       emailRef.current.value = "";
  //       passwordRef.current.value = "";
  //     } catch (error) {
  //       alert(error.message);
  //     }
  //   }
  // };
  const emailRef = useRef();
  const passwordRef = useRef();
  const { error, logIn } = useLogIn();
  const loginHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    await logIn(email, password);
    if (error) {
      console.log(error);
      alert(error);
    } else {
      emailRef.current.value = "";
      passwordRef.current.value = "";
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="p-3 border rounded border-dark"
        style={{ width: "300px", height: "350px" }}
      >
        <h3 className="fw-medium mt-3 mb-5 text-center">Login</h3>
        <form>
          <div className="input-group mb-3 border-0 text-bg-dark rounded-pill">
            <input
              type="email"
              className="form-control text-bg-dark border-0 rounded-pill login"
              placeholder="Email"
              ref={emailRef}
            ></input>
          </div>
          <div className="input-group text-bg-dark mb-3 border-0  rounded-pill">
            <input
              type="password"
              className="form-control text-bg-dark rounded-pill border-0 login"
              placeholder="Password"
              ref={passwordRef}
            ></input>
            <span style={{ paddingTop: "5px", paddingRight: "5px" }}>
              <img src={eyeImage} alt="passwordIcon" width="30" height="30" />
            </span>
          </div>
          <div className="d-grid border-0 mt-5">
            <button
              className="btn btn-primary rounded-pill"
              type="button"
              onClick={loginHandler}
            >
              Login
            </button>
          </div>
          <div className="border-0" style={{ textAlign: "center" }}>
            <NavLink to="/forgetpassword">Forget Password</NavLink>
          </div>
        </form>
      </div>
      <div className="d-grid gap-2 mt-3 mx-auto" style={{ width: "300px" }}>
        <button
          className="btn btn-light"
          type="button"
          style={{ backgroundColor: "rgba(0, 255, 255, 0.074)" }}
          onClick={() => {
            navigate("/signup", { replace: true });
          }}
        >
          Don't have an account? SignUp
        </button>
      </div>
      <style>
        {` 
            .login::placeholder { 
                color: white;
                opacity: 0.5;
            }
        `}
      </style>
    </div>
  );
};

export default LogIn;
