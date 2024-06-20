import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { key } from "../functions/login_signup";

const useLogIn = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const logIn = async (email, password) => {
    if (password.length > 7) {
      try {
        const response = await fetch(
          "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
            key,
          {
            method: "POST",
            body: JSON.stringify({
              email: email,
              password: password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (response.ok) {
          const data = await response.json();
          alert(`You have successfully logged in with email "${data.email}" `);
          localStorage.setItem("idToken", data.idToken);
          navigate("/");
        }
      } catch (err) {
        console.log(err.message);
        setError(err.message);
      }
    }
  };
  return { error, logIn };
};
export default useLogIn;
