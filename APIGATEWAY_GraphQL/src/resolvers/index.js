const lodash = require('lodash');

const authResolver = require('./auth_resolvers');
const vehicleResolver = require('./vehicle_resolvers');
const systemResolver = require('./system_resolvers');
const componentResolver = require('./component_resolvers');
const activityResolver = require('./activity_resolvers');
const timelineResolver = require('./timeline_resolvers');
const notificationResolver = require('./notification_resolvers');

const resolvers = lodash.merge(authResolver, vehicleResolver, systemResolver, componentResolver, activityResolver, timelineResolver, notificationResolver);

module.exports = resolvers;