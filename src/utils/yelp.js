// import axios from "axios";
const axios = require("axios");
require("dotenv").config();

const yelp = process.env.REACT_APP_API_KEY;
const baseUrl = "https://api.yelp.com/v3";
const searchBusinessEndPoint = "/businesses/search";

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
    .get(`${baseUrl}${searchBusinessEndPoint}`, config)
    .then((response) => {
      console.log(response.data.businesses[0].name);
    });
};

searchBusiness("Italian", "Madrid", "best_match");
