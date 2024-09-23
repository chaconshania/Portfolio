import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./webpages/About/About";
import Contact from "./webpages/Contact/Contact";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
]);
