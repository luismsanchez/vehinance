package com.vehinance.notifications.models;

import org.springframework.data.annotation.Id;
import java.util.Date;

public class Timeline {
    // Attributes
    @Id
    private String id;
    private Integer vehicle;
    private Integer activity;
    private Date startDate;
    private Integer startOdometer;
    private Date finalDate;
    private Integer finalOdometer;

    // Constructor
    public Timeline(String id, Integer vehicle, Integer activity, Date startDate, Integer startOdometer, Date finalDate, Integer finalOdometer) {
        this.id = id;
        this.vehicle = vehicle;
        this.activity = activity;
        this.startDate = startDate;
        this.startOdometer = startOdometer;
        this.finalDate = finalDate;
        this.finalOdometer = finalOdometer;
    }

    // Methods

    public String getId() {
        return id;
    }

    public Integer getVehicle() {
        return vehicle;
    }

    public Integer getActivity() {
        return activity;
    }

    public Date getStartDate() {
        return startDate;
    }

    public Integer getStartOdometer() {
        return startOdometer;
    }

    public Date getFinalDate() {
        return finalDate;
    }

    public Integer getFinalOdometer() {
        return finalOdometer;
    }

    public void setVehicle(Integer vehicle) {
        this.vehicle = vehicle;
    }

    public void setActivity(Integer activity) {
        this.activity = activity;
    }

    public void setStartDate(Date startDate) {
        this.startDate = startDate;
    }

    public void setStartOdometer(Integer startOdometer) {
        this.startOdometer = startOdometer;
    }

    public void setFinalDate(Date finalDate) {
        this.finalDate = finalDate;
    }

    public void setFinalOdometer(Integer finalOdometer) {
        this.finalOdometer = finalOdometer;
    }
}
