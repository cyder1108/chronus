"use strict";

export default class Chronus {

  constructor( len ) {
    this.len = len;
    this.unit = "millisecond";
  }

  year() {
    this.unit = "year";
    return this;
  }

  month(days = 30) {
    this.unit = "month";
    this.days = days;
    return this;
  }

  week() {
    this.unit = "week";
    return this;
  }

  day() {
    this.unit = "day";
    return this;
  }

  hour() {
    this.unit = "hour";
    return this;
  }

  minute() {
    this.unit = "minute";
    return this;
  }

  second() {
    this.unit = "second";
    return this;
  }

  millisecond() {
    this.unit = "millisecond";
    return this;
  }

  and( chronusObject ) {
    return new this.constructor( this.toInteger() + chronusObject.toInteger() );
  }

  toInteger() {
    switch(this.unit) {
      case "year":
        return this.len * 1000 * 60 * 60 * 24 * 365;
        break;

      case "month":
        return this.len * 1000 * 60 * 60 * 24 * this.days;
        break;

      case "week":
        return this.len * 1000 * 60 * 60 * 24 * 7;
        break;

      case "day":
        return this.len * 1000 * 60 * 60 * 24;
        break;

      case "hour":
        return this.len * 1000 * 60 * 60;
        break;

      case "minute":
        return this.len * 1000 * 60;
        break;

      case "second":
        return this.len * 1000;
        break;

      case "millisecond":
        return this.len;
        break;

      default:
        console.error()
    }
  }
}
