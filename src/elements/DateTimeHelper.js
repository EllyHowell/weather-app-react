export default class DateTimeHelper {
  Weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  WelcomeMessage() {
    let hour = this.dateTime.getHours();
    if (hour >= 0 && hour < 12) {
      return "Good Morning";
    } else if (hour > 11 && hour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  }

  TimeDispay() {
    var hours = this.dateTime.getHours();
    var minutes = this.dateTime.getMinutes();
    var suffix = hours > 12 ? "PM" : "AM";

    hours = hours > 12 ? hours - 12 : hours;
    minutes = minutes < 10 ? `0${minutes}` : minutes;
    return `${hours}:${minutes} ${suffix}`;
  }

  DayOfWeek(date) {
    return this.Weekday[date.getDay()].toUpperCase();
  }

  AddDays(days) {
    let date = new Date(this.dateTime);
    date.setDate(date.getDate() + days);
    return date;
  }

  constructor(weatherData) {
    let unixTimeStamp = weatherData.dt;
    let milliseconds = unixTimeStamp * 1000 + weatherData.timezone * 1000;
    this.dateTime = new Date(
      milliseconds + new Date().getTimezoneOffset() * 60000
    );
  }
}
