const vehicleResolver = {
    Query: {
        vehicleById: async (_, { id }, {dataSources, userIdToken}) => {
            let response = await dataSources.vehicleAPI.vehicleByIdRequest(id);
            let userId = response.user;
            if(userId == userIdToken){
                return response;
            } else {
                return null;
            }
        },

        myVehicles: async (_, {}, {dataSources, userIdToken}) => {
            if(userIdToken != null){
                return await dataSources.vehicleAPI.vehiclesByUserRequest(userIdToken);
            } else {
                return null;
            }
        }
    },

    Mutation: {
        createVehicle: async (_, {vehicleData}, {dataSources, userIdToken}) => {
            if(userIdToken != null){
                const createVehicleData = {
                   brand: vehicleData.brand, 
                   model: vehicleData.model,
                   odometer: vehicleData.odometer,
                   user: userIdToken
                }

                return await dataSources.vehicleAPI.createVehicle(createVehicleData);
            }
        },

        updateVehicle: async (_, {vehicleData}, {dataSources, userIdToken}) => {
            let response = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleData.id);
            let userId = response.user;
            if(userId == userIdToken) {
                const updateVehicleData = {
                    brand: vehicleData.brand, 
                    model: vehicleData.model,
                    odometer: vehicleData.odometer,
                    user: userIdToken
                }

                return await dataSources.vehicleAPI.updateVehicle(vehicleData.id, updateVehicleData);
            } else {
                return null;
            }
        },

        deleteVehicle: async (_, {id}, {dataSources, userIdToken}) => {
            let response = await dataSources.vehicleAPI.vehicleByIdRequest(id);
            let userId = response.user;
            if(userId == userIdToken) {
                await dataSources.vehicleAPI.deleteVehicle(id);
                return "Vehicle eliminated"
            } else {
                return null;
            }
        }

    }

};

module.exports = vehicleResolver;