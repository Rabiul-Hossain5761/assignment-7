import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Homepage from "../pages/homepage/Homepage";
import ErrorPage from "../pages/errorpage/ErrorPage";
import UserDetails from "../pages/userdetails/UserDetails";
import HistoryPage from "../pages/timelinepage/HistoryPage";
import StatsPage from "../pages/statspage/StatsPage";

export const router = createBrowserRouter([
  {
    path:"/",
    element:<MainLayout/>,
    children:[
      {
        index:true,
        element:<Homepage/>
      },
      {
        path:"/books",
        element:<HistoryPage/>,
      },
      {
        path:"userDetails/:id",
        element:<UserDetails/>,
      },
      {
        path:"/statspage",
        element:<StatsPage/>
      },
    ],
    errorElement: <ErrorPage/>,
  }
]);