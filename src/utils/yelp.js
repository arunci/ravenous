const yelp =
  "4mGZXiy14_HLpxFBzkuVZAak8_TdMtoeMvekkC6jETNajFcn-vCixcFoKk68UojfIBqon9Vc_9DYvOy0Tn1qB4oI8j8frun-ssVQIZqOtIZpohl3lMP7yQT2eTW3ZHYx";
// base yelp url
const baseUrl = "https://api.yelp.com/v3";
// search business endpoint
const searchBusinessEndpoint = "/businesses/search";
// complete path to endpoint
const finalEndpoint = baseUrl + searchBusinessEndpoint;

const searchBusiness = (term, location, sort_by) => {
  const config = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${yelp}`,
      "Content-Type": "application/json",
    },
  };

  const url = new URL(finalEndpoint);
  const params = {
    term: term,
    location: location,
    sort_by: sort_by,
    limit: 10,
  };
  Object.keys(params).forEach((key) =>
    url.searchParams.append(key, params[key])
  );

  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => {
      console.log(data.businesses);
    })
    .catch((error) => console.error("Error:", error));
};

searchBusiness("Italian", "NYC", "review_count");
