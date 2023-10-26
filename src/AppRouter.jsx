import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';

import Register from './routes/Register';
import Login from './routes/Login';
import PasswordReset from './routes/PasswordReset';
import UpdatePassword from './routes/UpdatePassword';
import AuthRoute from './routes/AuthRoute';
import Home from './routes/Home';
import Account from './routes/Account';
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
                path='/account'
                element={<Account />}
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
              path='/passwordreset'
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
