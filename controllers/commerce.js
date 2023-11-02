const commerceRouter = require('express').Router();
const request = require('request-promise');
const static = require('../static/static');

const baseURL = () =>
  `http://api.scraperapi.com?api_key=${process.env.SCRAPER_API_KEY}&autoparse=true`;

const scraperURL = 'https://www.amazon.com';

commerceRouter.get('/', (req, res) => {
  res.send(static());
});

//gp/goldbox?ref_=nav_cs_gb

// GET daily deals details
// commerceRouter.get('/product/products', async (req, res) => {
//   //   const { productId } = req.params;

//   try {
//     const response = await request(`${baseURL()}&url=${scraperURL}/gp/goldbox`);
//     res.json(JSON.parse(response));
//   } catch (err) {
//     console.log(err);
//   }
// });

// GET a Product details by the product ID
commerceRouter.get('/product/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    const response = await request(
      `${baseURL()}&url=${scraperURL}/dp/${productId}`
    );

    res.json(JSON.parse(response));
  } catch (err) {
    console.log(err);
  }
});

// GET Product review details by the product ID
commerceRouter.get('/product/:productId/reviews', async (req, res) => {
  const { productId } = req.params;

  try {
    const response = await request(
      `${baseURL()}&url=${scraperURL}/product-reviews/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (err) {
    console.log(err);
  }
});

// GET Product offers
commerceRouter.get('/product/:productId/offers', async (req, res) => {
  const { productId } = req.params;

  try {
    const response = await request(
      `${baseURL()}&url=${scraperURL}/gp/offer-listing/${productId}`
    );
    res.json(JSON.parse(response));
  } catch (err) {
    console.log(err);
  }
});

// GET Prodcuts by search
commerceRouter.get('/search/:searchItem', async (req, res) => {
  const { searchItem } = req.params;

  try {
    const response = await request(
      `${baseURL()}&url=${scraperURL}/s?k=${searchItem}`
    );

    res.json(JSON.parse(response));
  } catch (err) {
    console.log(err);
  }
});

module.exports = commerceRouter;
