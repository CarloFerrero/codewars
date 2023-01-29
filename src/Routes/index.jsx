import { createBrowserRouter } from "react-router-dom";
import App from "../Pages/App";
import RomanConverter from "../Pages/RomanConverter";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/roman-numerals-decoder",
    element: <RomanConverter />,
  },
]);
