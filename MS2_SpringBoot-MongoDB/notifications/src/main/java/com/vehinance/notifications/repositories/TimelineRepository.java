package com.vehinance.notifications.repositories;

import com.vehinance.notifications.models.Timeline;
import org.springframework.data.mongodb.repository.MongoRepository;
import java.util.Date;
import java.util.List;

public interface TimelineRepository extends MongoRepository<Timeline, String>{
    List<Timeline> findByVehicle(Integer vehicle);
    List<Timeline> findByActivity(Integer activity);
}
