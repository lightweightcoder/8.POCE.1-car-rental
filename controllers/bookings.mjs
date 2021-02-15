export default function initBookingsController(db) {
  const index = async (request, response) => {
    try {
      const bookings = await db.Booking.findAll();
      response.send({ bookings });
    } catch (error) {
      console.log('get bookings error', error);
    }
  };

  const create = async (request, response) => {
    try {
      const booking = await db.Booking.create(request.body);

      response.send({ booking });
    } catch (error) {
      console.log('create booking error', error);
    }
  };

  return {
    create,
    index,
  };
}
