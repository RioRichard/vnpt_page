const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

const app = express();

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Express EJS Layouts middleware
app.use(expressLayouts);
app.set('layout', 'layouts/main');

// Static files middleware
app.use(express.static(path.join(__dirname, 'public')));

// Routes
const indexRouter = require('../routes/index');
app.use('/', indexRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
