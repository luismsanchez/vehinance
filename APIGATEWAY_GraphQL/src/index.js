const { ApolloServer } = require('apollo-server');

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const AuthAPI = require('./dataSources/auth_api')
const ActivityAPI = require('./dataSources/activity_api')
const ComponentAPI = require('./dataSources/component_api')
const NotificationAPI = require('./dataSources/notification_api')
const SystemAPI = require('./dataSources/system_api')
const TimelineAPI = require('./dataSources/timeline_api')
const VehicleAPI = require('./dataSources/vehicle_api')
const authentication = require('./utils/authentication');


const server = new ApolloServer({
    context: authentication,
    typeDefs,
    resolvers,
    dataSources: () => ({
        activityAPI: new ActivityAPI(),
        authAPI: new AuthAPI(),
        componentAPI: new ComponentAPI(),
        notificationAPI: new NotificationAPI(),
        systemAPI: new SystemAPI(),
        timelineAPI: new TimelineAPI(),
        vehicleAPI: new VehicleAPI()
    }),
    introspection: true,
    playground: true
})


server.listen(process.env.PORT || 4000).then(({url}) => {
    console.log(`🚀 Server ready at ${url}`);
})