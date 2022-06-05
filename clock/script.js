let showTime = () => {
  let date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let currentSession = "AM";

  if (hour == 0) {
    hour = 12;
  }

  if (hour > 12) {
    hour = hour - 12;
    currentSession = "PM";
  }

  hour = hour < 10 ? "0" + hour : hour;
  minutes = minutes < 10 ? "0" + minutes : minutes;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  let finalTime = hour + ":" + minutes + ":" + seconds + " " + currentSession;

  let clockDiv = document.getElementById("clock");
  clockDiv.innerHTML = finalTime;

  setTimeout(showTime, 1000);
};
