import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './component/home/Home.jsx';
import Contact from './component/contact/Contact.jsx';
import Error from './component/Error/Error.jsx';
import ContactDetails from './component/ContactDetails/ContactDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/contact",
        element: <Contact />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users")
      },
      {
        path: '/contact/:userid',
        loader: ({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
        element: <ContactDetails></ContactDetails>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
