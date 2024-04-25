import React, { useState } from "react";
import { useQuery } from "urql";
import { urqlOptions } from "lib/graphql/urqlOptions";
import readCSV from "lib/graphql/queries/readCsv";
import { MainButton } from "components/atoms";
import { CSVTable } from "components/molecules";

export function CSVReader() {
    const [csvData, setCsvData] = useState("");
    const [result] = useQuery({
      query: readCSV,
      ...urqlOptions,
    });
  
    const { fetching, error, data } = result;
    
    function parseCSV(data) {
        if (!data || !data.read) return [];
        const dataString = JSON.stringify(data.read).slice(1, -1);
        const dataArray = dataString.split("\\n").map(row => row.split("$"));
        const titles = dataArray.shift() || [];
      
        // Filter out empty rows and handle empty values
        const filteredRows = dataArray.filter(row => row.some(cell => cell.trim() !== ""));
        const sanitizedRows = filteredRows.map(row => row.map(cell => cell.trim() === "" ? "" : cell));
      
        return { titles, rows: sanitizedRows };
      }
      
  
    const handleButtonClick = () => {
      const { titles, rows } = parseCSV(data);
      if (!titles.length || !rows.length) {
        setCsvData("No data available.");
      } else {
        setCsvData(<CSVTable titles={titles} rows={rows} />);
      }
    };
  
    return (
      <div className="container">
        <h1 className="title">Data from GraphQL</h1>
        <MainButton className="button" onClick={handleButtonClick} title="Get Data" />
        <div className="csv-container">
          {fetching ? <div className="loading">Loading...</div> : null}
          {error ? <div className="error">Error: {error.message}</div> : null}
          {csvData}
        </div>
      </div>
    );
  }