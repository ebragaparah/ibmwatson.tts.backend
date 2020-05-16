import app from './app';
import {sequelize} from './config/db/initializer';

//db.init();

const port = 3000;

app.listen(port, () => {
  console.log('Server is running');
});
