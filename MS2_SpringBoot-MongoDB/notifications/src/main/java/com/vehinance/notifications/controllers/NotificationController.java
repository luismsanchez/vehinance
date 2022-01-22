package com.vehinance.notifications.controllers;

import com.vehinance.notifications.models.Notification;
import com.vehinance.notifications.repositories.NotificationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class NotificationController {
    // Attributes
    private final NotificationRepository notificationRepository;

    // Constructor
    public NotificationController(NotificationRepository notificationRepository){
        this.notificationRepository = notificationRepository;
    }

    // Methods

    @GetMapping("/notification/{id}")
    public Optional<Notification> getNotification(@PathVariable String id){
        return this.notificationRepository.findById(id);
    }

    @GetMapping("/notifications/vehicle/{vehicle}")
    public List<Notification> getNotificationsByVehicle(@PathVariable Integer vehicle){
        return this.notificationRepository.findByVehicle(vehicle);
    }

    @GetMapping("/notifications/activity/{activity}")
    public List<Notification> getNotificationsByActivity(@PathVariable Integer activity){
        return this.notificationRepository.findByActivity(activity);
    }

    @PostMapping("/notification")
    public Notification newNotification(@RequestBody Notification notification){
        return this.notificationRepository.save(notification);
    }

    @DeleteMapping("/notification/{id}")
    public void deleteNotification(@PathVariable String id){
        this.notificationRepository.deleteById(id);
    }

    @PutMapping("/notification/{id}")
    public Notification updateNotification(@PathVariable String id, @RequestBody Notification new_notification){
        Notification old_notification = notificationRepository.findById(id).orElse(null);

        // Update object
        old_notification.setDate(new_notification.getDate());
        old_notification.setActivity(new_notification.getActivity());
        old_notification.setVehicle(new_notification.getVehicle());
        old_notification.setState(new_notification.getState());

        // Update Database
        return notificationRepository.save(old_notification);
    }

}
