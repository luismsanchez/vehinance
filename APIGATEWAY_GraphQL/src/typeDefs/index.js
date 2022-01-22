const activityTypeDef = require('./activity_type_def');
const authTypeDef = require('./auth_type_def');
const componentTypeDef = require('./component_type_def');
const notificationTypeDef = require('./notification_type_def');
const systemTypeDef = require('./system_type_def');
const timelineTypeDef = require('./timeline_type_def');
const vehicleTypeDef = require('./vehicle_type_def');

const schemasArray = [activityTypeDef, authTypeDef, componentTypeDef, notificationTypeDef, systemTypeDef, timelineTypeDef, vehicleTypeDef];

module.exports = schemasArray;