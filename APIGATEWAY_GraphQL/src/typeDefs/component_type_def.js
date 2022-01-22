const { gql } = require('apollo-server');

const componentTypeDef = gql`
    type Component{
        id: Int
        system: Int!
        component_name: String!
        component_description: String!
    }

    input ComponentInput{
        system: Int!
        component_name: String!
        component_description: String!
    }

    input ComponentUpdate{
        id: Int
        system: Int!
        component_name: String!
        component_description: String!
    }

    type Query{
        componentById(id: Int!): Component
        componentsBySystem(systemId: Int!): [Component]
    }

    type Mutation{
        createComponent(componentData: ComponentInput!): Component
        updateComponent(componentData: ComponentUpdate!): Component
        deleteComponent(id: Int!): String
    }

`;

module.exports = componentTypeDef;