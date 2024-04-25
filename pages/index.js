import React from "react";
import { Provider as URQLProvider } from "urql";
import {  client } from "lib/graphql/urqlOptions";
import { CSVReader } from "components/organisms";

const IndexPageWithProvider = () => (
  <URQLProvider value={client}>
    <CSVReader />
  </URQLProvider>
);

export default IndexPageWithProvider;
