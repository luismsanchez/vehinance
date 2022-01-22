const serverConfig = require('../server');
const { RESTDataSource } = require('apollo-datasource-rest');

class TimelineAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.notification_api_url;
    }

    async timelineByIdRequest(id){
        return await this.get(`/timeline/${id}/`);
    }

    async timelinesByVehicleRequest(id){
        return await this.get(`/timelines/vehicle/${id}/`);
    }

    async timelinesByActivityRequest(id){
        return await this.get(`/timelines/activity/${id}/`);
    }

    async createTimeline(timelineData){
        return await this.post(`/timeline/`, timelineData);
    }

    async updateTimeline(id, timelineData){
        return await this.put(`/timeline/${id}/`, timelineData);
    }

    async deleteTimeline(id){
        return await this.delete(`/timeline/${id}/`);
    }

}

module.exports = TimelineAPI;