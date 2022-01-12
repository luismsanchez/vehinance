package com.vehinance.notifications.repositories;

import com.vehinance.notifications.models.Notification;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.List;
import java.util.Date;

public interface NotificationRepository extends MongoRepository<Notification, String>{
    List<Notification> findByVehicle(Integer vehicle);
}
