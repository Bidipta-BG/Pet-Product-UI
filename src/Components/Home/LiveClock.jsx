import React, { useState, useEffect } from "react";

const LiveClock = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(timer);
    };
  }, []);

  // const formatTime = (dateTime) => {
  //   return dateTime.toLocaleTimeString([], {
  //     hour: "2-digit",
  //     minute: "2-digit",
  //     second: "2-digit",
  //   });
  // };

  const formatDate = (dateTime) => {
    const weekday = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let dayName = weekday[dateTime.getDay()];
    // console.log(dayName);
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let month = monthNames[dateTime.getMonth()];
    let day = dateTime.getDay();
    let year = dateTime.getFullYear();

    let returnVal = `${dayName.toUpperCase()}, ${month.toUpperCase()} ${day}, ${year}`;
    // console.log(returnVal);
    // return dateTime.toLocaleDateString();
    return returnVal;
  };

  return (
    <div>
      {formatDate(currentDateTime)}
      {/* {", "}
      {formatTime(currentDateTime)} */}
    </div>
  );
};

export default LiveClock;
