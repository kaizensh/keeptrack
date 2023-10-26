const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const logger = require('./logger');

const app = express();
const routes = require('./routes');

app.use(express.json());
app.use(express.urlencoded());
app.use(helmet());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API running');
});

app.use('/api', routes);

app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// eslint-disable-next-line no-unused-vars
app.use((error, req, res, next) => {
  logger.error(
    `${error.status || 500} - ${error.message} - ${req.originalUrl} - ${
      req.method
    } - ${req.ip}`
  );
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`);
});

module.exports = {
  app,
};
