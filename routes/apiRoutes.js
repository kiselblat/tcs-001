var db = require('../models');

module.exports = (app) => {
  app.get('/products/:id', (request, response) => {
    response.json(request.params.id);

    // TODO: GET request to external API

    // TODO: find record in local noSQL database

    // TODO: Return json object
  });
}