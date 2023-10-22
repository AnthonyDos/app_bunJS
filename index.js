import {routerUSer} from './router/UserRouter';
import mongoose from 'mongoose';
import app from './server';
require('dotenv').config();


mongoose.connect(process.env.MONGO_DB_URI, {
    useNewUrlParser: true
});
app.group("/api", (app) => app.use(routerUSer));


app.listen(3000, () => {
  console.log("Server started on port 3000");
}); 