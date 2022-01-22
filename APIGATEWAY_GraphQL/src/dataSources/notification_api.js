const serverConfig = require('../server');
const { RESTDataSource } = require('apollo-datasource-rest');

class NotificationAPI extends RESTDataSource{

    constructor(){
        super();
        this.baseURL = serverConfig.notification_api_url;
    }

    async notificationByIdRequest(id){
        return await this.get(`/notification/${id}/`);
    }

    async notificationsByVehicleRequest(id){
        return await this.get(`/notifications/vehicle/${id}/`);
    }

    async notificationsByActivityRequest(id){
        return await this.get(`/notifications/activity/${id}/`);
    }

    async createNotification(notificationData){
        return await this.post(`/notification/`, notificationData);
    }

    async updateNotification(id, notificationData){
        return await this.put(`/notification/${id}/`, notificationData);
    }

    async deleteNotification(id){
        return await this.delete(`/notification/${id}/`);
    }

}

module.exports = NotificationAPI;