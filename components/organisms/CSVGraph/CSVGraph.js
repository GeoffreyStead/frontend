import React from "react";
import { MainButton } from "components/atoms";

export function CSVGraph() {
    return (
      <div className="container">
        <h1 className="title">Graph from GraphQL</h1>
        <MainButton className="button" title="Get Data" />
      </div>
    );
  }