import { buildSchema } from "graphql"

export default buildSchema(`
        type Query {
        cameras(id: ID!): Camera
    }
        type Camera {
            title: String!
            rating: Int!
            review: String!
    }
    
   type Mutation { 
        addNewCamera (camera: CameraInput!): Camera    
    }
    
    input CameraInput { 
            title: String!
            rating: Int!
            review: String!   
     }
    
`);




