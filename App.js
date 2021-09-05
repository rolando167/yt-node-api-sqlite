const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const sequelize = require('./db/db');
require('dotenv').config();

const app = express();
app.use(express.json());// no olvidar NUNCA
app.use(cors());
app.use(morgan('dev'));
// --------
const PORT = process.env.PORT || 4000;

// --------
app.use('/api/v1', require('./routes'));
// --------

sequelize.sync()
.then((value) =>{
    console.log('DB running  successfully 🛢️');
})
.catch(error => console.log(error));

// --------
async function serverUp()  {
    await app.listen(PORT);
    console.log(`Server Running on port ▶️  ${PORT} 👍`);
}

serverUp();