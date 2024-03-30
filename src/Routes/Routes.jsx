import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import AddItems from "../pages/Dashboard/AddItems/AddItems";
import AllUsers from "../pages/Dashboard/AllUsers/AllUsers";
import ManageBooking from "../pages/Dashboard/ManageBooking/ManageBooking";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import MyCart from "../pages/Dashboard/MyCart/MyCart";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Secret from "../pages/Secret/Secret";
import Signup from "../pages/Signup/Signup";
import AdminRoute from "../providers/AdminRoute";
import PrivateRoute from "../providers/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "order/:category",
        element: <Order />,
      },
      {
        path: "secret",
        element: (
          <PrivateRoute>
            <Secret />
          </PrivateRoute>
        ),
      },

      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      //normal user routes
      {
        path: "mycart",
        element: <MyCart />,
      },

      //admin only routes

      {
        path: "addItems",
        element: (
          <AdminRoute>
            <AddItems></AddItems>
          </AdminRoute>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoute>
            <ManageItems></ManageItems>
          </AdminRoute>
        ),
      },
      {
        path: "bookings",
        element: (
          <AdminRoute>
            <ManageBooking />
          </AdminRoute>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoute>
            <UpdateItem></UpdateItem>
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://bistro-boss-serve-five.vercel.app/menu/${params.id}`),
      },
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
    ],
  },
]);
