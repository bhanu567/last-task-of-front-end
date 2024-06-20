import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { key } from "../functions/login_signup";

const useSignUp = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  async function signUp(email, password, confirmPassword) {
    if (password === confirmPassword) {
      if (password.length > 7) {
        try {
          const response = await fetch(
            "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
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
            const responseJSON = await response.json();
            alert(
              `You have successfully registered with email "${responseJSON.email}" `
            );
            navigate("/login", { replace: true });
          }
        } catch (err) {
          console.log(err.message);
          setError(err.message);
        }
      } else {
        setError("Enter A password of length greater than 7.");
      }
    } else {
      setError("Password and Confirm Password should be same.");
    }
  }
  return { error, signUp };
};
export default useSignUp;
