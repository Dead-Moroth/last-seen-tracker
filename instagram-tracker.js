var userData = {
  userName: "",
  status: "",
};

setInterval(function () {
  try {
    let hours, clock, currentHour;

    currentHour = new Date().getHours();

    if (currentHour < 12) {
      hours = currentHour;
      clock = "AM";
    } else {
      hours = currentHour - 12;
      clock = "PM";
    }

    var time = `${hours}:${new Date().getMinutes()}:${new Date().getSeconds()} ${clock}`;

    const currentStatus = document.getElementsByClassName("S-mcP")[1].innerText.split("\n")[1];

    if (currentStatus == "Active now") {
      const currentUserName = document.getElementsByClassName("S-mcP")[1].innerText.split("\n")[0];

      if (currentUserName !== userData.userName || currentStatus !== userData.status) {
        userData.userName = currentUserName;

        userData.status = currentStatus;

        console.log(time + " ** " + currentUserName + " ** " + currentStatus);
      }
    } else {
      // it means that user is offline
      const currentUserName = document.getElementsByClassName("S-mcP")[1].innerText.split("\n")[0];

      if (currentUserName !== userData.userName || userData.status !== "offline") {
        userData.userName = currentUserName;

        userData.status = "offline";

        console.log(time + " ** " + currentUserName + " ** " + userData.status);
      }
    }
  } catch (err) {
    console.log(err);
    alert("Opps.. An unexpected error has occurred!");
  }
}, 1000);
