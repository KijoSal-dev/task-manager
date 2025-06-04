// IMPORTS
const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes');

// CREATE EXPRESS AND MIDDLEWARE 
const app = express();
app.use(express.json());

// constants
const mongoUri = 'mongodb://localhost:27017/taskdb';
const PORT = 3000;
// Connect to MongoDB
mongoose.connect(mongoUri, {
    useNewUrlParser : true,
    useUnifiedTopology : true,
})
.then (() => console.log('Connected to MongoDB'))
.catch (err => console.error('MongoDB connection errror:', err));

// use task routes
app.use('/api', taskRoutes);

// fire up a SERVER
// ...existing code...
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});


