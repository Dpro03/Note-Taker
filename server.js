//Dependencies
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Routes
const routerapi = require('./routes/apiRoutes')(app);
const routerhtml = require('./routes/htmlRoutes')(app);

// Starts the server to begin listening
app.listen(PORT, function() {
    console.log(`App listening on http://localhost:${PORT}`);
}
);
