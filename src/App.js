import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import LogIn from "./pages/Login";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <LogIn /> },
  { path: "/signup", element: <SignUp /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
