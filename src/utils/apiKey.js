import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

export const mySearch = async (location, term, sort_by) => {
  try {
    const response = await axios.get("https://api.yelp.com/v3/businesses/search", {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
      params: {
        location,
        term,
        sort_by,
      },
    });

    return response.data;
  } catch (err) {
    console.error(err);
    throw err;
  }
};

