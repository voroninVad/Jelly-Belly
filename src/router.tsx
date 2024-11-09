import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import FactsPage from "./pages/Facts";
import NotFound from "./pages/NotFound";
import Layout from "./Layout";
import BeansPages from "./pages/Beans";
import Recipes from "./pages/Recipes";
import CombinationsPage from "./pages/Combinations";
import HistoryPage from "./pages/History";
import RecipePage from "./pages/RecipePage";
import Review from "./pages/Review";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Jelly-Belly/",
        element: <Home />,
      },
      {
        path: "/Jelly-Belly/beans/",
        element: <BeansPages />,
      },
      {
        path: "/Jelly-Belly/facts/",
        element: <FactsPage />,
      },
      {
        path: "/Jelly-Belly/recipes/",
        element: <Recipes />,
      },
      {
        path: "/Jelly-Belly/recipe/:id",
        element: <RecipePage />,
      },
      {
        path: "/Jelly-Belly/combinations/",
        element: <CombinationsPage />,
      },
      {
        path: "/Jelly-Belly/history/",
        element: <HistoryPage />,
      },
      {
        path: "/Jelly-Belly/review/",
        element: <Review />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
