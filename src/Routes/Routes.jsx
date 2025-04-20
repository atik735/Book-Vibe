import {
    createBrowserRouter,
  } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadList from "../Pages/ReadList/ReadList";
  
  export const router = createBrowserRouter([
    {
      path: "/",
      Component:Root,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            index:true,
            path:"/",
            Component:Home,
        },
        {
          path:"/readList",
          loader:() =>fetch('/booksData.json'),
          Component:ReadList
        },
        {
          path:"/bookDetails/:id",
          loader:() =>fetch('/booksData.json'),
          Component:BookDetails,
        }
      ]
    },
  ]);