// import axios from "axios";
const axios = require("axios");
require("dotenv").config();

const yelp = process.env.REACT_APP_API_KEY;
// base yelp url
const baseUrl = "https://api.yelp.com/v3";
// search business endpoint
const searchBusinessEndpoint = "/businesses/search";
// complete path to endpoint
const finalEndpoint = baseUrl + searchBusinessEndpoint

const searchBusiness = (term, location, sort_by) => {
  const config = {
    headers: {
      Authorization: `Bearer ${yelp}`,
    },
    params: {
      term,
      location,
      sort_by,
      limit: 50,
    },
  };

  return axios
    .get(finalEndpoint, config)
    .then((response) => {
      console.log(response.data.businesses[0].name);
    });
};

searchBusiness("Italian", "Madrid", "best_match");
