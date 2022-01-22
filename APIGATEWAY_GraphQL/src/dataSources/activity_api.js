const serverConfig = require('../server');
const { RESTDataSource } = require('apollo-datasource-rest');

class ActivityAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.auth_registry_api_url;
    }

    async activityByIdRequest(id){
        return await this.get(`/maintenance/activity/${id}/`);
    }

    async activitiesByUserRequest(id){
        return await this.get(`/maintenance/search/activities/user/${id}`);
    }

    async activitiesByVehicleRequest(id){
        return await this.get(`/maintenance/search/activities/vehicle/${id}`);
    }

    async activitiesBySystemRequest(id){
        return await this.get(`/maintenance/search/activities/system/${id}`);
    }

    async activitiesByComponentRequest(id){
        return await this.get(`/maintenance/search/activities/component/${id}`);
    }

    async createActivity(activityData){
        return await this.post(`/maintenance/activity/`, activityData);
    }

    async updateActivity(id, activityData){
        return await this.put(`/maintenance/activity/${id}/`, activityData);
    }

    async deleteActivity(id){
        return await this.delete(`/maintenance/activity/${id}/`);
    }

}

module.exports = ActivityAPI;