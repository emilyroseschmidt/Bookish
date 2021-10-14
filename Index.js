const { request } = require("express");
const express = require("express");
const got = require("got");

const app = express();
const port = 3000;

const initOptions = {/* initialization options */};
const pgp = require('pg-promise')(initOptions);
const db = pgp(connection);

app.get("/forecast/:location", (req, res) => {
    got
      .get(
        "http://datapoint.metoffice.gov.uk/public/data/val/wxfcs/all/json/sitelist?key=819423df-a8c7-444c-86b2-823250d59464"
      )
      .json()


      
      res.send(forecastFinal);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
npm install pg-promise