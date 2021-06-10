const statusClass = "_7yrSq",
  messageClass = "_3AUV4",
  groupClass = "YmixP",
  nameClass = "z4t2k";

var userData = {
  userName: "",
  status: "",
};

const chatNotOpen = `Please open someone's chat whose last seen is hidden 
And left your pc turn on`;

setInterval(function () {
  try {
    // Checking chat has opened or not
    if (document.getElementsByClassName(messageClass)[0]) {
      // console.log(worngScreen);

      // online
      // last seen
      // typing...
      // group

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

      if (document.getElementsByClassName(groupClass)[0]) {
        // Now Inner Text can be
        // last seen *OR* group members name *OR* typing *OR* online

        const currentStatus = document.getElementsByClassName(groupClass)[0].innerText;

        if (currentStatus == "online" || currentStatus == "typing…") {
          const currentUserName = document.getElementsByClassName(nameClass)[0].innerText;

          if (currentUserName !== userData.userName || currentStatus !== userData.status) {
            userData.userName = currentUserName;

            userData.status = currentStatus;

            console.log(time + " ** " + currentUserName + " ** " + currentStatus);
          }
        }
      } else if (document.getElementsByClassName(groupClass)[0] == undefined) {
        // it means that user is offline
        const currentUserName = document.getElementsByClassName(nameClass)[0].innerText;

        if (currentUserName !== userData.userName || userData.status !== "offline") {
          userData.userName = currentUserName;

          userData.status = "offline";

          console.log(time + " ** " + currentUserName + " ** " + userData.status);
        }
      }
    } else {
      console.log(chatNotOpen);
    }
  } catch (err) {
    console.log(err);
    alert("Opps.. An unexpected error has occurred!");
  }
}, 1000);

console.clear()
