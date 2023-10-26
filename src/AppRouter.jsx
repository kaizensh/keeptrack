import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import Register from './routes/Register';
import Login from './routes/Login';
import PasswordReset from './routes/PasswordReset';
import UpdatePassword from './routes/UpdatePassword';
import AuthRoute from './routes/AuthRoute';
import Home from './routes/Home';
import EditProfile from './routes/EditProfile';
import Dashboard from './routes/Dashboard';

const AppRouter = () => {
  return (
    <>
      <Container
        className='d-flex align-items-center justify-content-center'
        style={{ minHeight: '100vh' }}>
        <div
          className='w-100'
          style={{ maxWidth: '400px' }}>
          <Routes>
            {/* AUTHENTICATED */}
            <Route element={<AuthRoute />}>
              <Route
                path='/'
                element={<Home />}
              />
              <Route
                path='/edit-profile'
                element={<EditProfile />}
              />
              <Route
                path='/dashboard'
                element={<Dashboard />}
              />
            </Route>

            {/* UNAUTHENTICATED */}
            <Route
              path='/register'
              element={<Register />}
            />
            <Route
              path='/login'
              element={<Login />}
            />
            <Route
              path='/reset-password'
              element={<PasswordReset />}
            />
            <Route
              path='/update-password'
              element={<UpdatePassword />}
            />
          </Routes>
        </div>
      </Container>
    </>
  );
};

export default AppRouter;
