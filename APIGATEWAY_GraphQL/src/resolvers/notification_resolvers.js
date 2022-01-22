const notificationResolver = {
    Query: {
        notificationById: async (_, { id }, {dataSources, userIdToken}) => {
            let response = await dataSources.notificationAPI.notificationByIdRequest(id);
            let vehicleId = response.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken){
                return response;
            } else {
                return null;
            }
        },

        notificationByVehicle: async (_, {vehicleId}, {dataSources, userIdToken}) => {
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId);
            let userId = request.user;
            if(userIdToken == userId) {
                return await dataSources.notificationAPI.notificationsByVehicleRequest(vehicleId);
            } else {
                return null;
            }
        },

        notificationByActivity: async (_, {activityId}, {dataSources, userIdToken}) => {
            let response = await dataSources.activityAPI.activityByIdRequest(activityId);
            let componentId = response.component;
            let query = await dataSources.componentAPI.componentByIdRequest(componentId);
            let systemId = query.system;
            let search = await dataSources.systemAPI.systemByIdRequest(systemId);
            let vehicleId = search.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userIdToken == userId) {
                return await dataSources.notificationAPI.notificationsByActivityRequest(activityId);
            } else {
                return null;
            }
        },
    },

    Mutation: {
        createNotification: async (_, {notificationData}, {dataSources, userIdToken}) => {
            let curr_date = new Date(); // Now
            let vehicleId = notificationData.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userIdToken == userId){
                const createNotificationData = {
                    vehicle: notificationData.vehicle, 
                    activity: notificationData.activity,
                    date: curr_date,
                    state: false
                }

                return await dataSources.notificationAPI.createNotification(createNotificationData);
            }
        },

        autoNotification: async (_, {vehicleId}, {dataSources, userIdToken}) => {
            let curr_date = new Date(); // Now
            let line_date = new Date();
            let curr_year = curr_date.getFullYear();
            let curr_month = curr_date.getMonth() + 1;
            let curr_day = curr_date.getDate();
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;

            if(userIdToken == userId){
                let timesbyvehi = await dataSources.timelineAPI.timelinesByVehicleRequest(vehicleId);
                
                for(timeline of timesbyvehi){
                    line_date = timeline.finalDate;
                    if(timeline.finalOdometer <= request.odometer){
                        
                        const createNotificationData = {
                            vehicle: timeline.vehicle, 
                            activity: timeline.activity,
                            date: curr_date,
                            state: false
                        }
        
                        await dataSources.notificationAPI.createNotification(createNotificationData);
                    
                    } else if(line_date != null) {
                        line_split = line_date.split('T');
                        line_split = line_split[0].split('-');
                        let line_year = parseInt(line_split[0])
                        let line_month = parseInt(line_split[1])
                        let line_day = parseInt(line_split[2])
                        if(curr_year >= line_year){
                            if(curr_month >= line_month){
                                if(curr_day >= line_day){
                                    
                                    const createNotificationData = {
                                        vehicle: timeline.vehicle, 
                                        activity: timeline.activity,
                                        date: curr_date,
                                        state: false
                                    }
                    
                                    await dataSources.notificationAPI.createNotification(createNotificationData);

                                }
                            }
                        }  
                    }
                }
                return "Notifications created"
            }
        },

        updateNotification: async (_, {notificationData}, {dataSources, userIdToken}) => {
            let vehicleId = notificationData.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken) {
                const updateNotificationData = {
                    vehicle: notificationData.vehicle, 
                    activity: notificationData.activity,
                    date: notificationData.date,
                    state: notificationData.state
                }

                return await dataSources.notificationAPI.updateNotification(notificationData.id, updateNotificationData);
            } else {
                return null;
            }
        },

        deleteNotification: async (_, {id}, {dataSources, userIdToken}) => {
            let response = await dataSources.notificationAPI.notificationByIdRequest(id);
            let vehicleId = response.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken) {
                await dataSources.notificationAPI.deleteNotification(id);
                return "Notification eliminated"
            } else {
                return null;
            }
        },

    }

};

module.exports = notificationResolver;