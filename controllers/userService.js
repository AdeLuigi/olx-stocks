const Service = require('../models/ServiceModel');

module.exports = {
  async rotinha(request, response) {
    const { id } = request.params;
    console.log(id);
    try {
      const services = await Service.find({
        userId: id,
      });

      return response.json(services);
    } catch (error) {
      return response.status(400).json({ message: error });
    }
  },
};
