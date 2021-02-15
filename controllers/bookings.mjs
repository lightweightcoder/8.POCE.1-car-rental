export default function initBookingsController(db) {
  const index = async (request, response) => {
    try {
      const orders = await db.Order.findAll();
      response.send({ orders });
    } catch (error) {
      console.log(error);
    }
  };

  const create = async (request, response) => {
    try {
      const booking = await db.Booking.create(request.body);

      response.send(booking);
    } catch (error) {
      console.log('create booking error', error);
    }
  };

  return {
    create,
    index,
  };
}
