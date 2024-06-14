import Layout from "@components/index";
import Cover from "@pages/Cover";
import ErrorPage from "@pages/ErrorPage";
import Cagong from "@pages/projects/Cagong";
import Interactive from "@pages/projects/Interactive";
import NextMovies from "@pages/projects/NextMovies";
import WanderLens from "@pages/projects/WanderLens";
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
  {
    path: "/projects/interactive",
    element: <Interactive />,
  },
]);

export default router;
