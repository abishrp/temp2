const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { sequelize } = require('./config/database');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
const taskRoutes = require('./routes/tasks');
const userRoutes = require('./routes/users');

app.use('/tasks', taskRoutes);
app.use('/user', userRoutes);

// Start server
const PORT = process.env.PORT || 3000;
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});


// app.listen(PORT, () => {
//     console.log(`Server is running on port ${PORT}`);
//   });

