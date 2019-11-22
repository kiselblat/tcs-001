# myRetail Service

1. [Installation and Dependencies](#installation-and-dependencies)
2. [How to Use](#how-to-use)
3. [How it Works](#how-it-works)

## Installation and Dependencies

### Prerequisites

Download and install the following tools in order to run the myRetail service.

  - **node.js** : [NodeJS](https://nodejs.org/en/) is a command-line JavaScript application. It allows us to run a server with js.

  - **MongoDB** : [MongoDB](https://www.mongodb.com/) is a noSQL database that store information as BSONs. In order to run the myRetail service, a Mongo must either be available on localhost, or configured with an environment variable.

### Packages

  - **axios** : Used to GET HTML from the external product database hosted by myRetail (redsky.target.com)

  - **express** : Express creates and manages our server. It takes in a PORT, a set of middleware, and the routes.

  - **mongoose** : Mongoose is our ORM. It allows us to control and access our MongoDB collections.

  - **nodemon** : Nodemon is a development tool that automatically restarts the service when changes occur.

A `package.json` file has been provided so all of these dependencies can be installed by simply running:

```bash
npm i
```

Once these have been installed, and provided Mongo is running and accessible, Scraper can be started with:

```bash
node server.js
```

## How to Use

Once the server has been started, information from the API can be accessed by opening our browser and pointing it to:

```url
localhost:8080/products/{id}
```

where `{id}` is the eight digit id number representing a myRetail product.
The browser will then display information associated with that product like so:

```json
{
  "id": "13860428",
  "name": "The Big Lebowski (Blu-ray)",
  "current_price": {
    "value": 29.99,
    "currency_code": "USD"
  }
}
```

## How it Works

The myRetail API takes the id number of a given product from the URL entered in the browser and uses it to look up a product record in an existing external product database.

Once it has the record, the service looks up pricing information in a local noSQL database implemented with Mongo.

The service then assembles the id, name, and cost with currency into a JSON which is returned to the browser.

## About Me

Tom Christ is a Minneapolis-based Web Developer. He is a graduate of the University of Minnesota Full Stack Web Development Boot Camp.