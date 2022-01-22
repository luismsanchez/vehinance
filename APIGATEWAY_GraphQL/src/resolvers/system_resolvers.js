const systemResolver = {
    Query: {
        systemById: async (_, { id }, {dataSources, userIdToken}) => {
            let response = await dataSources.systemAPI.systemByIdRequest(id);
            let vehicleId = response.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken){
                return response;
            } else {
                return null;
            }
        },

        systemsByVehicle: async (_, {vehicleId}, {dataSources, userIdToken}) => {
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId);
            let userId = request.user;
            if(userIdToken == userId) {
                return await dataSources.systemAPI.systemsByVehicleRequest(vehicleId);
            } else {
                return null;
            }
        }
    },

    Mutation: {
        createSystem: async (_, {systemData}, {dataSources, userIdToken}) => {
            let vehicleId = systemData.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userIdToken == userId){
                const createSystemData = {
                    vehicle: systemData.vehicle, 
                    system_name: systemData.system_name,
                    system_description: systemData.system_description
                }

                return await dataSources.systemAPI.createSystem(createSystemData);
            }
        },

        updateSystem: async (_, {systemData}, {dataSources, userIdToken}) => {
            let response = await dataSources.systemAPI.systemByIdRequest(systemData.id);
            let vehicleId = response.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken) {
                const updateSystemData = {
                    vehicle: systemData.vehicle, 
                    system_name: systemData.system_name,
                    system_description: systemData.system_description
                }

                return await dataSources.systemAPI.updateSystem(systemData.id, updateSystemData);
            } else {
                return null;
            }
        },

        deleteSystem: async (_, {id}, {dataSources, userIdToken}) => {
            let response = await dataSources.systemAPI.systemByIdRequest(id);
            let vehicleId = response.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken) {
                await dataSources.systemAPI.deleteSystem(id);
                return "System eliminated"
            } else {
                return null;
            }
        }

    }

};

module.exports = systemResolver;