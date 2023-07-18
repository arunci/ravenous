require('dotenv').config()

const apiKey = process.env.REACT_APP_API_KEY
const sdk = require("api")("@yelp-developers/v1.0#29blk6qj5xa");
const mySearch = (location, term, sort_by) => {
  sdk.auth(`Bearer ${apiKey}`);
  sdk
    .v3_business_search({ location: location, term: term, sort_by: sort_by })
    .then(({ data }) => console.log(data))
    .catch((err) => console.error(err));
};
mySearch("Murcia", "Chinese", "best_match")