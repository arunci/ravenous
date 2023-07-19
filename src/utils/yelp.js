const apiKey =
  "4mGZXiy14_HLpxFBzkuVZAak8_TdMtoeMvekkC6jETNajFcn-vCixcFoKk68UojfIBqon9Vc_9DYvOy0Tn1qB4oI8j8frun-ssVQIZqOtIZpohl3lMP7yQT2eTW3ZHYx";

const searchBusiness = async (term, location, sort_by) => {
  const url = `https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sort_by}&limit=10`;

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
    console.log(data.businesses);
  } catch (error) {
    console.log("Error:", error);
  }
};

searchBusiness("Italian", "Madrid", "best_match");
