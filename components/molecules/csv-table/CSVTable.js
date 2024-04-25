import React from "react";
import { CSVTableWrapper } from "./CSVTable.styles";

export function CSVTable({ titles, rows }) {
  return (
    <CSVTableWrapper>
      <thead>
        <tr>
          <th>Number</th>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, rowIndex) => (
          <tr key={rowIndex}>
            <td>{rowIndex + 1}</td>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </CSVTableWrapper>
  );
}
