package com.vehinance.notifications.models;

import org.springframework.data.annotation.Id;
import java.util.Date;

public class Notification {

    // Attributes
    @Id
    private String id;
    private Date date;
    private Integer activity;
    private Boolean state;
    private Integer vehicle;

    // Constructor
    public Notification(String id, Date date, Integer activity, Boolean state, Integer vehicle) {
        this.id = id;
        this.date = date;
        this.activity = activity;
        this.state = state;
        this.vehicle = vehicle;
    }

    // Methods

    public String getId() {
        return id;
    }

    public Date getDate() {
        return date;
    }

    public Integer getActivity() {
        return activity;
    }

    public Boolean getState() {
        return state;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public void setActivity(Integer activity) {
        this.activity = activity;
    }

    public void setState(Boolean state) {
        this.state = state;
    }

    public Integer getVehicle() {
        return vehicle;
    }

    public void setVehicle(Integer vehicle) {
        this.vehicle = vehicle;
    }
}
