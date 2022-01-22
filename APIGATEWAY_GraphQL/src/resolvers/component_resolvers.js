const componentResolver = {
    Query: {
        componentById: async (_, { id }, {dataSources, userIdToken}) => {
            let response = await dataSources.componentAPI.componentByIdRequest(id);
            let systemId = response.system;
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

        componentsBySystem: async (_, {systemId}, {dataSources, userIdToken}) => {
            let search = await dataSources.systemAPI.systemByIdRequest(systemId);
            let vehicleId = search.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId);
            let userId = request.user;
            if(userIdToken == userId) {
                return await dataSources.componentAPI.componentsBySystemRequest(systemId);
            } else {
                return null;
            }
        }
    },

    Mutation: {
        createComponent: async (_, {componentData}, {dataSources, userIdToken}) => {
            let search = await dataSources.systemAPI.systemByIdRequest(componentData.system);
            let vehicleId = search.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userIdToken == userId){
                const createComponentData = {
                    system: componentData.system, 
                    component_name: componentData.component_name,
                    component_description: componentData.component_description
                }

                return await dataSources.componentAPI.createComponent(createComponentData);
            }
        },

        updateComponent: async (_, {componentData}, {dataSources, userIdToken}) => {
            let response = await dataSources.systemAPI.systemByIdRequest(componentData.system);
            let vehicleId = response.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken) {
                const updateComponentData = {
                    system: componentData.system, 
                    component_name: componentData.component_name,
                    component_description: componentData.component_description
                }

                return await dataSources.componentAPI.updateComponent(componentData.id, updateComponentData);
            } else {
                return null;
            }
        },

        deleteComponent: async (_, {id}, {dataSources, userIdToken}) => {
            let search = await dataSources.componentAPI.componentByIdRequest(id);
            let systemId = search.system;
            let response = await dataSources.systemAPI.systemByIdRequest(systemId);
            let vehicleId = response.vehicle;
            let request = await dataSources.vehicleAPI.vehicleByIdRequest(vehicleId)
            let userId = request.user;
            if(userId == userIdToken) {
                await dataSources.componentAPI.deleteComponent(id);
                return "Component eliminated"
            } else {
                return null;
            }
        }

    }

};

module.exports = componentResolver;