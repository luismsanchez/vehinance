const serverConfig = require('../server');
const { RESTDataSource } = require('apollo-datasource-rest');

class VehicleAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.auth_registry_api_url;
    }

    async vehicleByIdRequest(id){
        return await this.get(`/maintenance/vehicle/${id}/`);
    }

    async vehiclesByUserRequest(id){
        return await this.get(`/maintenance/search/vehicles/${id}`);
    }

    async createVehicle(vehicleData){
        return await this.post(`/maintenance/vehicle/`, vehicleData);
    }

    async updateVehicle(id, vehicleData){
        return await this.put(`/maintenance/vehicle/${id}/`, vehicleData);
    }

    async deleteVehicle(id){
        return await this.delete(`/maintenance/vehicle/${id}/`);
    }

}

module.exports = VehicleAPI;