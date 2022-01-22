const { gql } = require('apollo-server');

const vehicleTypeDef = gql`
    type Vehicle{
        id: Int
        brand: String!
        model: String!
        odometer: Int!
        user: Int!
    }

    input VehicleInput{
        brand: String!
        model: String!
        odometer: Int!
    }

    input VehicleUpdate{
        id: Int!
        brand: String!
        model: String!
        odometer: Int!
    }

    type Query{
        vehicleById(id: Int!): Vehicle
        myVehicles: [Vehicle]
    }

    type Mutation{
        createVehicle(vehicleData: VehicleInput!): Vehicle
        updateVehicle(vehicleData: VehicleUpdate!): Vehicle
        deleteVehicle(id: Int!): String
    }

`;

module.exports = vehicleTypeDef;