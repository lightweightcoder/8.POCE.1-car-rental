import { resolve } from 'path';
import db from './models/index.mjs';

import initCarsController from './controllers/cars.mjs';
import initBookingsController from './controllers/bookings.mjs';

export default function routes(app) {
  const BookingsController = initBookingsController(db);
  app.post('/bookings', BookingsController.create);

  app.get('/bookings', BookingsController.index);

  const CarsController = initCarsController(db);
  app.get('/cars', CarsController.index);

  // special JS page. Include the webpack index.html file
  app.get('/home', (request, response) => {
    response.sendFile(resolve('dist', 'main.html'));
  });
}
