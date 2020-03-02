import { buildSchema } from "graphql"

export default buildSchema(`
        type Query {
        cameras(id: ID!): [Camera]
    }
        type Camera {
            id: ID!
            title: String!
            rating: Int!
            review: String!
            submitter: ID
    }
    
`);




