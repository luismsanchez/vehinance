const serverConfig = require('../server');
const { RESTDataSource } = require('apollo-datasource-rest');

class ComponentAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.auth_registry_api_url;
    }

    async componentByIdRequest(id){
        return await this.get(`/maintenance/component/${id}/`);
    }

    async componentsBySystemRequest(id){
        return await this.get(`/maintenance/search/components/${id}`);
    }

    async createComponent(componentData){
        return await this.post(`/maintenance/component/`, componentData);
    }

    async updateComponent(id, componentData){
        return await this.put(`/maintenance/component/${id}/`, componentData);
    }

    async deleteComponent(id){
        return await this.delete(`/maintenance/component/${id}/`);
    }

}

module.exports = ComponentAPI;