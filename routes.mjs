import { resolve } from 'path';
import db from './models/index.mjs';

import initCarsController from './controllers/cars.mjs';
import initOrdersController from './controllers/orders.mjs';

export default function routes(app) {
  const OrdersController = initOrdersController(db);
  app.post('/orders', OrdersController.create);
  app.get('/orders', OrdersController.index);

  const CarsController = initCarsController(db);
  app.get('/cars', CarsController.index);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
