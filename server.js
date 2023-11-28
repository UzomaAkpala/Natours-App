const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');
dotenv.config({ path: './config.env' });

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('DB connection successful');
  });

const toursSchema = new mongoose.Schema({
  name: String,
  rating,
  Number,
  price: Number,
});

//SERVER
const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}...`);
});
