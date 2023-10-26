import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme.js';

import { BrowserRouter } from 'react-router-dom';

import Layout from './components/Layout';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Layout>
          <App />
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
