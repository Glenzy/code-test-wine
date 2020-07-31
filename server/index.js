const express = require('express');
const bodyParser = require('body-parser');
const orderBy = require('lodash/_baseOrderBy');

const { wines } = require('./db/wines.json');
const { getBreakDown } = require('./util');

const server = express();
const port = 3001;
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

/**
 * All API endpoints here use a filter to get a specific wine. I have decided to do this simply
 * to simulate how a db query would happen. If MongoDB is attached, I would use Mongoose to handle
 * the schema of the wines and use something like :  
 * Wine.findOne({
        "lotCode": req.params.lotCode
      }).then(...)
 */

server.get('/getYearBreakdown/:lotCode', (req, res) => {
  try {
    const wine = wines.filter((wine) => wine.lotCode === req.params.lotCode);
    if (wine.length === 0) throw new Error('Not found');
    const { components } = wine[0];
    const yearBreakdown = {
      breakDownType: 'year',
      breakdown: getBreakDown(components, 'year', 'percentage'),
    };
    res.status(200).jsonp(yearBreakdown);
  } catch (error) {
    if (error.message === 'Not found') {
      res.status(404).send(`Error : ${error.message}`);
    } else {
      res.status(500).jsonp({ error: `${error}` });
    }
  }
});

server.get('/getVarietyBreakdown/:lotCode', (req, res) => {
  try {
    const wine = wines.filter((wine) => wine.lotCode === req.params.lotCode);
    if (wine.length === 0) throw new Error('Not found');
    const { components } = wine[0];
    const varietyBreakdown = {
      breakDownType: 'variety',
      breakdown: getBreakDown(components, 'variety', 'percentage'),
    };
    res.status(200).jsonp(varietyBreakdown);
  } catch (error) {
    if (error.message === 'Not found') {
      res.status(404).send(`Error : ${error.message}`);
    } else {
      res.status(500).jsonp({ error: `${error}` });
    }
  }
});

server.get('/getRegionBreakdown/:lotCode', (req, res) => {
  try {
    const wine = wines.filter((wine) => wine.lotCode === req.params.lotCode);
    if (wine.length === 0) throw new Error('Not found');
    const { components } = wine[0];
    const regionBreakdown = {
      breakDownType: 'region',
      breakdown: getBreakDown(components, 'region', 'percentage'),
    };
    res.status(200).jsonp(regionBreakdown);
  } catch (error) {
    if (error.message === 'Not found') {
      res.status(404).send(`Error : ${error.message}`);
    } else {
      res.status(500).jsonp({ error: `${error}` });
    }
  }
});

server.get('/getYearAndVarietyBreakdown/:lotCode', (req, res) => {
  try {
    const wine = wines.filter((wine) => wine.lotCode === req.params.lotCode);
    if (wine.length === 0) throw new Error('Not found');
    const { components } = wine[0];
    const yearBreakdown = getBreakDown(components, 'year', 'percentage');
    const varietyBreakdown = getBreakDown(components, 'variety', 'percentage');
    const yearVarietyBreakdown = {
      breakDownType: 'year and variety',
      breakdown: {
        year: yearBreakdown,
        variety: varietyBreakdown,
      },
    };
    res.status(200).jsonp(yearVarietyBreakdown);
  } catch (error) {
    if (error.message === 'Not found') {
      res.status(404).send(`Error : ${error.message}`);
    } else {
      res.status(500).jsonp({ error: `${error}` });
    }
  }
});

server.get('/getWine/:lotCode', (req, res) => {
  try {
    const wine = wines.filter((wine) => wine.lotCode === req.params.lotCode);
    if (wine.length === 0) throw new Error('Not found');
    wine[0].components = orderBy(wine[0].components, ['percentage'], ['desc']);
    res.status(200).jsonp(wine[0]);
  } catch (error) {
    if (error.message === 'Not found') {
      res.status(404).send(`Error : ${error.message}`);
    } else {
      res.status(500).jsonp({ error: `${error}` });
    }
  }
});

server.get('/getAllWine', (_, res) => {
  try {
    res.status(200).jsonp(wines);
  } catch (error) {
    res.status(404).jsonp({ error: `${error}` });
  }
});

server.listen(port, () => {
  console.log('Listening on: ', port);
});
