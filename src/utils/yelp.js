// import your secret key from a file that is excluded from git
import { secretKey } from "./config";
const apiKey = secretKey;

export const searchBusiness = async (term, location, sort_by) => {
  const url = `https://cors-anywhere.herokuapp.com/api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}&limit=10`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    if (data.businesses) {
      const businesses = data.businesses;
      // console.log(data.businesses);
      return businesses.map((business) => {
        return {
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
        };
      });
    }
  } catch (error) {
    console.log("Error:", error);
  }
};
