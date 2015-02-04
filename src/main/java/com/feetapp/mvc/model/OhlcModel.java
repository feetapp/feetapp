package com.feetapp.mvc.model;

import java.util.Date;

/**
 * Created with IntelliJ IDEA.
 * User: user
 * Date: 04.02.15
 * Time: 14:22
 * To change this template use File | Settings | File Templates.
 */
public class OhlcModel {

    private Date time;
    private float open;
    private float high;
    private float low;
    private float close;

    public Date getTime() {
        return time;
    }

    public void setTime(Date time) {
        this.time = time;
    }

    public float getOpen() {
        return open;
    }

    public void setOpen(float open) {
        this.open = open;
    }

    public float getHigh() {
        return high;
    }

    public void setHigh(float high) {
        this.high = high;
    }

    public float getLow() {
        return low;
    }

    public void setLow(float low) {
        this.low = low;
    }

    public float getClose() {
        return close;
    }

    public void setClose(float close) {
        this.close = close;
    }
}
