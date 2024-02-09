import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bulma/css/bulma.min.css';
import './custom.css';
import App from './App.jsx';
import ErrorPage from './pages/ErrorPage';
import ResumePage from './pages/ResumePage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <AboutPage />,
      },
      {
        path: '/projects',
        element: <ProjectPage />,
      },
      {
        path: '/resume',
        element: <ResumePage />,
      },
      {
        path: '/contact',
        element: <ContactPage />,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={ router } />
);