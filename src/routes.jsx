import Layout from "@components/index";
import Cover from "@pages/Cover";
import ErrorPage from "@pages/ErrorPage";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Cover />,
      },
    ],
  },
]);

export default router;
