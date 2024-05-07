import React from "react";
import { MainButton } from "components/atoms";

export function CSVChart() {
    return (
      <div className="container">
        <h1 className="title">Chart from GraphQL</h1>
        <MainButton className="button" title="Get Data" />
      </div>
    );
  }