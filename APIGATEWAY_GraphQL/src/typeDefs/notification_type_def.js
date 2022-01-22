const { gql } = require('apollo-server');

const notificationTypeDef = gql`
    type Notification{
        id: String
        vehicle: Int!
        activity: Int!
        date: String
        state: Boolean!
    }

    input NotificationInput{
        vehicle: Int!
        activity: Int!
        date: String
    }

    input NotificationUpdate{
        id: String
        vehicle: Int!
        activity: Int!
        date: String
        state: Boolean!
    }

    type Query{
        notificationById(id: String!): Notification
        notificationByVehicle(vehicleId: Int!): [Notification]
        notificationByActivity(activityId: Int!): [Notification]
    }

    type Mutation{
        createNotification(notificationData: NotificationInput!): Notification
        autoNotification(vehicleId: Int!): String
        updateNotification(notificationData: NotificationUpdate!): Notification
        deleteNotification(id: String!): String
    }

`;

module.exports = notificationTypeDef;