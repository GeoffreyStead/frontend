import { cacheExchange, createClient, fetchExchange } from "urql";

const API_BASE_URL = "https://backend-lac-seven.vercel.app/api";

const client = createClient({
  url: API_BASE_URL,
  fetchOptions: () => {
    return {
      headers: {
        // Add any required headers here
        'Content-Type': 'application/json',
        // You may need to add other headers if required by your backend
      },
    };
  },
  exchanges: [cacheExchange, fetchExchange],
});

const urqlOptions = {
  requestPolicy: "cache-and-network",
  variables: {
    //Define variables
  },
};

export { urqlOptions, client }
