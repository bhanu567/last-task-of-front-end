import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import LogIn from "./pages/LogIn/Login";
import SignUp from "./pages/SignUp/SignUp";
import EmailPage from "./pages/SendEmail/EmailPage";
import Rough from "./pages/Rough/Rough";
import MailInboxPage from "./pages/Inbox/MailInboxPage";
import { useDispatch, useSelector } from "react-redux";
import { fetchEmail } from "./store/action/fetchEmail";
import { savingToFirebase } from "./store/functions/sendEmail";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LogIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/email", element: <EmailPage /> },
  { path: "/rough", element: <Rough /> },
  { path: "/inbox", element: <MailInboxPage /> },
]);

function App() {
  const dispatch = useDispatch();
  const changed = useSelector((state) => state.email.changed);
  const emails = useSelector((state) => state.email.emails);
  const unread = useSelector((state) => state.email.unread);
  const totalEmails = useSelector((state) => state.email.totalEmails);
  useEffect(() => {
    dispatch(fetchEmail());
  }, [dispatch]);

  // setInterval(() => {
  //   dispatch(fetchEmail());
  // }, [2000]);

  useEffect(() => {
    if (changed) {
      savingToFirebase(emails, unread, totalEmails);
    }
  }, [dispatch, emails, unread, totalEmails]);

  return <RouterProvider router={router} />;
}

export default App;
