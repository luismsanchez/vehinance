const serverConfig = require('../server');
const { RESTDataSource } = require('apollo-datasource-rest');

class SystemAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.auth_registry_api_url;
    }

    async systemByIdRequest(id){
        return await this.get(`/maintenance/system/${id}/`);
    }

    async systemsByVehicleRequest(id){
        return await this.get(`/maintenance/search/systems/${id}`);
    }

    async createSystem(systemData){
        return await this.post(`/maintenance/system/`, systemData);
    }

    async updateSystem(id, systemData){
        return await this.put(`/maintenance/system/${id}/`, systemData);
    }

    async deleteSystem(id){
        return await this.delete(`/maintenance/system/${id}/`);
    }

}

module.exports = SystemAPI;