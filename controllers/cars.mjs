export default function initCarsController(db) {
  const index = async (request, response) => {
    try {
      const cars = await db.Car.findAll();
      response.send({ cars });
    } catch (error) {
      console.log(error);
    }
  };

  return {
    index,
  };
}
