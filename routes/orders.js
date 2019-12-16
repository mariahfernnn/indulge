/*
 * All routes for orders are defined here
 * Since this file is loaded in server.js into api/orders,
 *   these routes are mounted onto /orders
 */

const express = require('express');
const ordersRoutes = express.Router();
const queryFunction = require('../lib/query_functions');
const sms = require("./twilio-sms");

module.exports = function(db) {

// Saving an order for a particular restaurant and order
// Get request to get the restaurant id based on it's name
ordersRoutes.post("/", function(req, res) {
  sms();
  console.log('NOOOOOOO!!!!!!')
  console.log(req.body);
  req.body.orderItems.filter(item => item.quantity !== "0");
  queryFunction.addOrderForRestaurant(db, req.body, (id) => {
    res.redirect(`/orders/${id}`)
  })
  .then(rows => {
    console.log("TESTING THE ORDERS.JS");
    // res.sendStatus(201);
  })
  console.log("HELLO",req.body);

})

  return ordersRoutes;
}
