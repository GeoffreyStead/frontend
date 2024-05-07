import React, { useState } from "react";
import { Provider as URQLProvider } from "urql";
import { client } from "lib/graphql/urqlOptions";
import { CSVReader } from "components/organisms";
import { NavBar } from "components/molecules/nav-bar";
import { UploadCSV } from "components/organisms/UploadCSV/UploadCSV";
import { CSVGraph } from "components/organisms/CSVGraph";
import { CSVChart } from "components/organisms/CSVChart";

const IndexPageWithProvider = () => {
  const [selected, setSelected] = useState("upload");

  return (
    <URQLProvider value={client}>
      <NavBar setSelected={setSelected}/>
      {selected === "upload" && <UploadCSV />}
      {selected === "data" && <CSVReader />}
      {selected === "graph" && <CSVGraph />}
      {selected === "chart" && <CSVChart />}
    </URQLProvider>
  );
}

export default IndexPageWithProvider;
