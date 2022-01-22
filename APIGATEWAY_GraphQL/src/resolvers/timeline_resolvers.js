const timelineResolver = {
    Query: {
        timelineById: async (_, { id }, {dataSources, userIdToken}) => {
            let response = await dataSources.timelineAPI.timelineByIdRequest(id);
            let vehicleId = response.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken){
                return response;
            } else {
                return null;
            }
        },

        timelinesByVehicle: async (_, {vehicleId}, {dataSources, userIdToken}) => {
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId);
            let userId = request.user;
            if(userIdToken == userId) {
                return await dataSources.timelineAPI.timelinesByVehicleRequest(vehicleId);
            } else {
                return null;
            }
        },

        timelinesByActivity: async (_, {activityId}, {dataSources, userIdToken}) => {
            let response = await dataSources.activityAPI.activityByIdRequest(activityId);
            let componentId = response.component;
            let query = await dataSources.componentAPI.componentByIdRequest(componentId);
            let systemId = query.system;
            let search = await dataSources.systemAPI.systemByIdRequest(systemId);
            let vehicleId = search.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userIdToken == userId) {
                return await dataSources.timelineAPI.timelinesByActivityRequest(activityId);
            } else {
                return null;
            }
        },
    },

    Mutation: {
        createTimeline: async (_, {timelineData}, {dataSources, userIdToken}) => {
            let activityId = timelineData.activity;
            let response = await dataSources.activityAPI.activityByIdRequest(activityId)
            let curr_date = new Date(); // Now
            let next_date = new Date(); // Now
            next_date.setDate(next_date.getDate() + response.time_interval); // plus interval
            let next_odometer = timelineData.startOdometer + response.distance_interval;

            let vehicleId = timelineData.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userIdToken == userId){
                const createTimelineData = {
                    vehicle: timelineData.vehicle, 
                    activity: timelineData.activity,
                    startDate: curr_date,
                    finalDate: next_date,
                    startOdometer: timelineData.startOdometer,
                    finalOdometer: next_odometer
                }

                return await dataSources.timelineAPI.createTimeline(createTimelineData);
            }
        },

        updateTimeline: async (_, {timelineData}, {dataSources, userIdToken}) => {
            let vehicleId = timelineData.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken) {
                const updateTimelineData = {
                    vehicle: timelineData.vehicle, 
                    activity: timelineData.activity,
                    startDate: timelineData.startDate,
                    finalDate: timelineData.finalDate,
                    startOdometer: timelineData.startOdometer,
                    finalOdometer: timelineData.finalOdometer
                }

                return await dataSources.timelineAPI.updateTimeline(timelineData.id, updateTimelineData);
            } else {
                return null;
            }
        },

        deleteTimeline: async (_, {id}, {dataSources, userIdToken}) => {
            let response = await dataSources.timelineAPI.timelineByIdRequest(id);
            let vehicleId = response.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken) {
                await dataSources.timelineAPI.deleteTimeline(id);
                return "Timeline eliminated"
            } else {
                return null;
            }
        },

    }

};

module.exports = timelineResolver;