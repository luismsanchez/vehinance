const activityResolver = {
    Query: {
        activityById: async (_, { id }, {dataSources, userIdToken}) => {
            let response = await dataSources.activityAPI.activityByIdRequest(id);
            let componentId = response.component;
            let query = await dataSources.componentAPI.componentByIdRequest(componentId);
            let systemId = query.system;
            let search = await dataSources.systemAPI.systemByIdRequest(systemId);
            let vehicleId = search.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken){
                return response;
            } else {
                return null;
            }
        },

        activitiesByComponent: async (_, {componentId}, {dataSources, userIdToken}) => {
            let query = await dataSources.componentAPI.componentByIdRequest(componentId);
            let systemId = query.system;
            let search = await dataSources.systemAPI.systemByIdRequest(systemId);
            let vehicleId = search.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId);
            let userId = request.user;
            if(userIdToken == userId) {
                return await dataSources.activityAPI.activitiesByComponentRequest(componentId);
            } else {
                return null;
            }
        },

        activitiesBySystem: async (_, {systemId}, {dataSources, userIdToken}) => {
            let search = await dataSources.systemAPI.systemByIdRequest(systemId);
            let vehicleId = search.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId);
            let userId = request.user;
            if(userIdToken == userId) {
                return await dataSources.activityAPI.activitiesBySystemRequest(systemId);
            } else {
                return null;
            }
        },

        activitiesByVehicle: async (_, {vehicleId}, {dataSources, userIdToken}) => {
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId);
            let userId = request.user;
            if(userIdToken == userId) {
                return await dataSources.activityAPI.activitiesByVehicleRequest(vehicleId);
            } else {
                return null;
            }
        },

        activitiesByUser: async (_, {userId}, {dataSources, userIdToken}) => {
            if(userIdToken == userId) {
                return await dataSources.activityAPI.activitiesByUserRequest(userId);
            } else {
                return null;
            }
        },
    },

    Mutation: {
        createActivity: async (_, {activityData}, {dataSources, userIdToken}) => {
            let query = await dataSources.componentAPI.componentByIdRequest(activityData.component);
            let systemId = query.system;
            let search = await dataSources.systemAPI.systemByIdRequest(systemId);
            let vehicleId = search.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userIdToken == userId){
                const createActivityData = {
                    component: activityData.component, 
                    distance_interval: activityData.distance_interval,
                    time_interval: activityData.time_interval,
                    activity_description: activityData.activity_description
                }

                return await dataSources.activityAPI.createActivity(createActivityData);
            }
        },

        updateActivity: async (_, {activityData}, {dataSources, userIdToken}) => {
            let query = await dataSources.componentAPI.componentByIdRequest(activityData.component);
            let systemId = query.system;
            let response = await dataSources.systemAPI.systemByIdRequest(systemId);
            let vehicleId = response.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken) {
                const updateActivityData = {
                    component: activityData.component, 
                    distance_interval: activityData.distance_interval,
                    time_interval: activityData.time_interval,
                    activity_description: activityData.activity_description
                }

                return await dataSources.activityAPI.updateActivity(activityData.id, updateActivityData);
            } else {
                return null;
            }
        },

        deleteActivity: async (_, {id}, {dataSources, userIdToken}) => {
            let query = await dataSources.activityAPI.activityByIdRequest(id);
            let componentId = query.component;
            let search = await dataSources.componentAPI.componentByIdRequest(componentId);
            let systemId = search.system;
            let response = await dataSources.systemAPI.systemByIdRequest(systemId);
            let vehicleId = response.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken) {
                await dataSources.activityAPI.deleteActivity(id);
                return "Activity eliminated"
            } else {
                return null;
            }
        }

    }

};

module.exports = activityResolver;