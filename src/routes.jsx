import Layout from "@components/index";
import Cover from "@pages/Cover";
import ErrorPage from "@pages/ErrorPage";
import Cagong from "@pages/projects/Cagong";
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
]);

export default router;
