package com.vehinance.notifications.controllers;

import com.vehinance.notifications.models.Timeline;
import com.vehinance.notifications.repositories.TimelineRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class TimelineController {
    // Attributes
    private final TimelineRepository timelineRepository;

    // Constructor
    public TimelineController(TimelineRepository timelineRepository) {
        this.timelineRepository = timelineRepository;
    }

    // Methods
    @GetMapping("/timeline/{id}")
    public Optional<Timeline> getTimeline(@PathVariable String id){
        return this.timelineRepository.findById(id);
    }

    @GetMapping("/timelines/vehicle/{vehicle}")
    public List<Timeline> getTimelinesByVehicle(@PathVariable Integer vehicle){
        return this.timelineRepository.findByVehicle(vehicle);
    }

    @GetMapping("/timelines/activity/{activity}")
    public List<Timeline> getTimelinesByActivity(@PathVariable Integer activity){
        return this.timelineRepository.findByActivity(activity);
    }

    @PostMapping("/timeline")
    public Timeline newTimeline(@RequestBody Timeline timeline){
        return this.timelineRepository.save(timeline);
    }

    @DeleteMapping("/timeline/{id}")
    public void deleteTimeline(@PathVariable String id){
        this.timelineRepository.deleteById(id);
    }

    @PutMapping("/timeline/{id}")
    public Timeline updateTimeline(@PathVariable String id, @RequestBody Timeline new_timeline){
        Timeline old_timeline = this.timelineRepository.findById(id).orElse(null);

        // update object
        old_timeline.setActivity(new_timeline.getActivity());
        old_timeline.setVehicle(new_timeline.getVehicle());
        old_timeline.setStartDate(new_timeline.getStartDate());
        old_timeline.setFinalDate(new_timeline.getFinalDate());
        old_timeline.setStartOdometer(new_timeline.getStartOdometer());
        old_timeline.setFinalOdometer(new_timeline.getFinalOdometer());

        // update database
        return this.timelineRepository.save(old_timeline);
    }
}
