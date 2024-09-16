import { createBrowserRouter } from "react-router-dom";
import MainContainer from "../components/MainContainer";
import WatchPage from "../components/WatchPage";
import Body from "../components/Body";
import SearchResultPage from "../components/SearchResultPage";


export const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <WatchPage />,
        },
        {
          path: "/search",
          element: <SearchResultPage />,
        },
      ],
    },
  ]);