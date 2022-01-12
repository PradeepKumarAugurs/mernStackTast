const express = require('express');
const initProductRoutes = require('./routes/products');
const initUserRoutes = require('./routes/user');
const initOutletRoutes = require('./routes/outlet');
const initOrderRoutes = require('./routes/order');
const cors = require('cors');
const bodyParser = require('body-parser');
let app = express();
let port = 8000;



const corsOpts = {
    origin: '*',
    methods: ['GET','POST','PATCH','DELETE'],
    allowedHeaders: ['Content-Type']
};

app.use(cors(corsOpts));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
initProductRoutes(app);
initUserRoutes(app);
initOutletRoutes(app);
initOrderRoutes(app);



// app.all("/*", function (req, res, next) {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials",true);
//     res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//     res.header('Access-Control-Allow-Headers', 'Content-Type,Accept,accesstoken,X-Access-Token,X-Key,Authorization,X-Requested-With,Origin,Access-Control-Allow-Origin,Access-Control-Allow-Credentials');
//     next();
// });

app.listen(port, () => console.log(`Building a login system with NodeJS is running on port ${port}!`));
