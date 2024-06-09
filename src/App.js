import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";
import EmailPage from "./pages/EmailPage";
import Rough from "./pages/Rough";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LogIn /> },
  { path: "/signup", element: <SignUp /> },
  { path: "/email", element: <EmailPage /> },
  { path: "/rough", element: <Rough /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
