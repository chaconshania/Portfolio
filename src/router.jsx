import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import About from "./webpages/About/About";
import Contact from "./webpages/Contact/Contact";
import CaseStudies from "./webpages/CaseStudies/CaseStudies";
import Oasis from "./webpages/CaseStudies/Oasis/Oasis";
import FitMix from "./webpages/CaseStudies/FitMix/FitMix";

export const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "/casestudies", element: <CaseStudies /> },
  { path: "/casestudies/oasis", element: <Oasis /> },
  { path: "/casestudies/fitmix", element: <FitMix /> },
]);
