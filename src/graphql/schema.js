import { buildSchema } from "graphql"

export default buildSchema(`
    type Cameras {
        id: ID!
        title: String!
        rating: Int!
        review: String!
        submitter: ID!
    }
`);

