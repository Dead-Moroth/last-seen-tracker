const statusClass = "_7yrSq",
  messageClass = "_3AUV4",
  groupClass = "YmixP",
  nameClass = "z4t2k";

var userData = {
  msgDelay: 1000,
  messageToBeSend: "Good Morning Miss Kaur 🤗",
  isMsgSend: false,
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

            if (!userData.isMsgSend) {
              let messageBox = document.querySelectorAll("[contenteditable='true']")[1];

              // Creating the event which create message inside input box
              let event = document.createEvent("UIEvents");
              messageBox.innerHTML = userData.messageToBeSend;
              event.initUIEvent("input", true, true, window, 1);

              // Firing create message event
              messageBox.dispatchEvent(event);

              // Creating send button click event
              var MyEvent = document.createEvent("MouseEvents");
              MyEvent.initMouseEvent("click", true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

              // Firing the click event after 1 second
              setTimeout(document.querySelector('span[data-icon="send"]').dispatchEvent(MyEvent), userData.msgDelay);

              // ! Don't forgot to chnage the flag
              userData.isMsgSend = true;
            }
          }
        }
      } else if (document.getElementsByClassName(groupClass)[0] == undefined) {
        // it means that user is offline
        const currentUserName = document.getElementsByClassName(nameClass)[0].innerText;

        if (currentUserName !== userData.userName || userData.status !== "offline") {
          userData.userName = currentUserName;

          userData.status = "offline";

          const dispayMsg = userData.isMsgSend ? "offline" : "She is sleeping :)";

          console.log(time + " ** " + currentUserName + " ** " + dispayMsg);
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
