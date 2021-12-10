const express = require('express');
const app = express();
const agriotRouter = require('./routes/agriot_routes');

// Middlewares
app.set('port', process.env.PORT || 3005);
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'alive' });
});

// Routes
app.use('/agriot', agriotRouter);

// Start WebService
app.listen(app.get('port'), () => {
    console.log('AGRIOT Project WebService running successfully on port 3005');
});
