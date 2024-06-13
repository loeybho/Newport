import Layout from "@components/index";
import Cover from "@pages/Cover";
import ErrorPage from "@pages/ErrorPage";
import Cagong from "@pages/projects/Cagong";
import NextMovies from "@pages/projects/NextMovies";
import WanderLens from "@pages/projects/NextMovies";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Cover />,
      },
    ],
  },
  {
    path: "/projects/cagong",
    element: <Cagong />,
  },
  {
    path: "/projects/wanderlens",
    element: <WanderLens />,
  },
  {
    path: "/projects/nextmovies",
    element: <NextMovies />,
  },
]);

export default router;
