const commerceRouter = require('express').Router();
const request = require('request-promise');
const static = require('../static/static');

const key = 'a09e28da4649835f7cc7de443a1f2457';

const baseURL = `http://api.scraperapi.com?api_key=${key}&autoparse=true`;
const scraperURL = 'https://www.amazon.com';

commerceRouter.get('/', (req, res) => {
  console.log(process.env.SCRAPER_API_KEY);
  res.send(static());
});

//gp/goldbox?ref_=nav_cs_gb

// GET daily deals details
// commerceRouter.get('/products/deals', async (req, res) => {
//   //   const { productId } = req.params;

//   try {
//     const response = await request(
//       `${baseURL}&url=${scraperURL}/s?bbn=16225007011&rh=n%3A16225007011%2Cp_n_date%3A1249033011&dc&qid=1698255502&rnid=1249031011&ref=lp_16225007011_nr_p_n_date_0`
//     );
//     res.json(JSON.parse(response));
//   } catch (err) {
//     console.log(err);
//   }
// });

commerceRouter.get('/product/:productId', async (req, res) => {
  const { productId } = req.params;

  try {
    const response = await request(
      `${baseURL}&url=${scraperURL}/dp/${productId}`
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
      `${baseURL}&url=${scraperURL}/product-reviews/${productId}`
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
      `${baseURL}&url=${scraperURL}/gp/offer-listing/${productId}`
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
      `${baseURL}&url=${scraperURL}/s?k=${searchItem}`
    );
    res.json(JSON.parse(response));
  } catch (err) {
    console.log(err);
  }
});

module.exports = commerceRouter;
