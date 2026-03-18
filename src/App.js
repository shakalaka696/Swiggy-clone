import { createRoot } from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";


const App = () =>{

  return (
    <>
    <Header></Header>
    <Body></Body>
    </>
  );
    
} 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
]);
const root = createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);
