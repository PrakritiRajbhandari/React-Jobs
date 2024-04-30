import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';
import HomePage from './pages/HomePage';
import JobPage from './pages/JobPage';
import MainLayout from './layout/MainLayout';
import NotFoundPage from './pages/NotPageFound';
import JobsPage from './pages/JobsPage'; 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
    <Route index element={<HomePage />} />
    <Route path='/jobs' element={<JobPage />} />
    <Route path='*' element={<NotFoundPage />} />
    <Route path='/jobs/:id' element={<JobsPage />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router}/>
};
export default App