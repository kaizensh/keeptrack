import { Route, Routes } from 'react-router-dom';

import Home from './routes/Home';
import Dashboard from './routes/Dashboard';

const AppRouter = () => {
  return (
    <Routes>
      <Route
        path='/'
        exact
        element={<Home />}
      />
      <Route
        path='/dashboard'
        exact
        element={<Dashboard />}
      />
    </Routes>
  );
};

export default AppRouter;
