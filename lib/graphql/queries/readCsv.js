import { gql } from "urql"

const readCSV = gql`
  query {
    read
  }
`

export default readCSV
