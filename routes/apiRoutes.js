const axios = require('axios');

const db = require('../models');

module.exports = (app) => {

  app.get('/products/:id', (request, response) => {

    let replyObject = {};
    let url = `https://redsky.target.com/v2/pdp/tcin/${request.params.id}?excludes=taxonomy,price,promotion,bulk_ship,rating_and_review_reviews,rating_and_review_statistics,question_answer_statistics`

    replyObject.id = request.params.id;
    
    // GET request to external API
    axios.get(url).then(getReply => {
      
      replyObject.name = getReply.data.product.item.product_description.title;
      
      // find record in local noSQL database
      db.myRetailItem.find({ myRetailId: request.params.id })
      .then(dbmyRetailItem => {
        // first check if item exists in local price database
        if (dbmyRetailItem.length) {
          replyObject.current_price = {
            value: dbmyRetailItem[0].price,
            currency_code: dbmyRetailItem[0].currency
          };
          response.json(replyObject);
        // if no local record exists, create one
        } else {
          db.myRetailItem.create({ myRetailId: request.params.id })
          .then(dbmyRetailItem => {
            replyObject.current_price = {
              value: dbmyRetailItem.price,
              currency_code: dbmyRetailItem.currency
            };
            response.json(replyObject);
          })
          .catch(error => {
            console.log(error);
          });
        }
      });

    })

  });

  // I couldn't get this route to work properly with Postman
  // app.put('/products/:id', (request, response) => {
  //   db.myRetailItem.findOneAndUpdate(
  //     { myRetailId: request.params.id },
  //     { price: request.body.price, currency: request.body.currency },
  //     { new: true }
  //   );
  // })

}