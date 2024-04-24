import React, { useState } from 'react';
import { useQuery, Provider as URQLProvider } from 'urql';
import { urqlOptions, client } from '../lib/graphql/urqlOptions';
import readCSV from '@/lib/graphql/queries/readCsv';

function IndexPage() {
  const [csvData, setCsvData] = useState('');
  const [result] = useQuery({
    query: readCSV,
    ...urqlOptions,
  });

  if (result.fetching) return <div className="loading">Loading...</div>;
  if (result.error) return <div className="error">Error: {result.error.message}</div>;

  const { data } = result;

  const handleButtonClick = () => {
    setCsvData(JSON.stringify(data, null, 2));
  };

  return (
    <div className="container">
      <h1 className="title">Data from GraphQL</h1>
      <button className="button" onClick={handleButtonClick}>Get Data</button>
      <textarea className="textarea" value={csvData} readOnly rows={10} />
    </div>
  );
}

const IndexPageWithProvider = () => (
  <URQLProvider value={client}>
    <IndexPage />
  </URQLProvider>
);

export default IndexPageWithProvider;
