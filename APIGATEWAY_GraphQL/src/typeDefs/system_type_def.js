const { gql } = require('apollo-server');

const systemTypeDef = gql`
    type System{
        id: Int
        vehicle: Int!
        system_name: String!
        system_description: String!
    }

    input SystemInput{
        vehicle: Int!
        system_name: String!
        system_description: String!
    }

    input SystemUpdate{
        id: Int
        vehicle: Int!
        system_name: String!
        system_description: String!
    }

    type Query{
        systemById(id: Int!): System
        systemsByVehicle(vehicleId: Int!): [System]
    }

    type Mutation{
        createSystem(systemData: SystemInput!): System
        updateSystem(systemData: SystemUpdate!): System
        deleteSystem(id: Int!): String
    }

`;

module.exports = systemTypeDef;