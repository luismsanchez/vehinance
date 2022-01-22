const { gql } = require('apollo-server');

const timelineTypeDef = gql`
    type Timeline{
        id: String
        vehicle: Int!
        activity: Int!
        startDate: String
        finalDate: String
        startOdometer: Int
        finalOdometer: Int
    }

    input TimelineInput{
        vehicle: Int!
        activity: Int!
        startOdometer: Int
    }

    input TimelineUpdate{
        id: String
        vehicle: Int!
        activity: Int!
        startDate: String
        finalDate: String
        startOdometer: Int
        finalOdometer: Int
    }

    type Query{
        timelineById(id: String!): Timeline
        timelinesByVehicle(vehicleId: Int!): [Timeline]
        timelinesByActivity(activityId: Int!): [Timeline]
    }

    type Mutation{
        createTimeline(timelineData: TimelineInput!): Timeline
        updateTimeline(timelineData: TimelineUpdate!): Timeline
        deleteTimeline(id: String!): String
    }

`;

module.exports = timelineTypeDef;