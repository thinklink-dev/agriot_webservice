const express = require('express');
const app = express();

// Middlewares
app.set('port', process.env.PORT || 3005);
app.use(express.json());

// Routes
app.use(require('./routes/agriot_routes.js'));
app.use(require('./routes/forecast_routes.js'));

// Start WebService
app.listen(app.get('port'), () => {
    console.log('AGRIOT Project WebService running successfully on port 3005');
});
