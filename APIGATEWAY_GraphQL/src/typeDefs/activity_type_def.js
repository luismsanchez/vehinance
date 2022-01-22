const { gql } = require('apollo-server');

const activityTypeDef = gql `
    type Activity{
        id: Int
        component: Int!
        distance_interval: Int
        time_interval: Int
        activity_description: String!
    }

    input ActivityInput{
        component: Int!
        distance_interval: Int
        time_interval: Int
        activity_description: String!
    }

    input ActivityUpdate{
        id: Int
        component: Int!
        distance_interval: Int
        time_interval: Int
        activity_description: String!
    }

    type Query{
        activityById(id: Int!): Activity
        activitiesByComponent(componentId: Int!): [Activity]
        activitiesBySystem(systemId: Int!): [Activity]
        activitiesByVehicle(vehicleId: Int!): [Activity]
        activitiesByUser(userId: Int!): [Activity]
    }

    type Mutation{
        createActivity(activityData: ActivityInput!): Activity
        updateActivity(activityData: ActivityUpdate!): Activity
        deleteActivity(id: Int!): String
    }

`;

module.exports = activityTypeDef;