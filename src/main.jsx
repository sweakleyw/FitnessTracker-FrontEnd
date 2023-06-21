import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root';
import Homepage from './components/Homepage';
import Register from './components/Register';
import Login from './components/Login';
import Routines from './components/Routines';
import MyRoutines from './components/MyRoutines';
import Activities from './components/Activities';
import Routine from './components/Routine';
import NewRoutine from './components/NewRoutine';
import AddActivities from './components/AddActivities';
import EditActivity from './components/EditActivity';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <Root />,

    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/routines",
        element: <Routines />,
      },
      {
        path: "/routines/:routineId",
        element: <Routine />,
      },
      {
        path: "/routines/:routineId/activities",
        element: <AddActivities />,
      },
      {
        path: "/routine_activities/:routineActivityId",
        element: <EditActivity />,
      },
      {
        path: "/myroutines",
        element: <MyRoutines />,
      },
      {
        path: "/newroutine",
        element: <NewRoutine />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
