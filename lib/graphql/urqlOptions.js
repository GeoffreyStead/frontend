import { cacheExchange, createClient, fetchExchange } from "urql";

const API_BASE_URL = "https://backend-lac-seven.vercel.app/api";

const client = createClient({
  url: API_BASE_URL,
  exchanges: [cacheExchange, fetchExchange],
});

const urqlOptions = {
  requestPolicy: "cache-and-network",
  variables: {
    //Define variables
  },
};

export { urqlOptions, client }
