import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
// import Login from "./pages/Login.tsx";

const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div>Error Occured</div>,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   path: "login",
      //   element: <Login />,
      // },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider
      fallbackElement={<div>Loading</div>}
      router={browserRouter}
    />
);
