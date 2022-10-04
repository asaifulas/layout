import React from 'react'
import routes from './Routes'
import { Navigate, Route, Routes } from 'react-router-dom';

const App = () => {
    const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      if (route.collapse) {
        return getRoutes(route.collapse);
      }

      if (route.route) {
        return <Route exact path={route.route} element={route.component} key={route.key} />;
      }

      return null;
    });

  return (
    <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/home" />} />
    </Routes>
  )
}

export default App