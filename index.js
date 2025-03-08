let message = document.getElementById("form_message");
let subject = document.getElementById("form_subject");
let email = document.getElementById("form_email");
let fName = document.getElementById("form_name");

window.addEventListener("load", function () {
  setTimeout(function () {
    document.body.classList.add("loaded");
  }, 2000); // Adjust the timeout for how long you want the loading screen to stay
});

function sendMessage() {
  // Get the form fields
  const message = document.getElementById("form_message");
  const subject = document.getElementById("form_subject");
  const email = document.getElementById("form_email");
  const fName = document.getElementById("form_name");

  // Check if any field is empty
  if (
    message.value == "" ||
    subject.value == "" ||
    email.value == "" ||
    fName.value == ""
  ) {
    return false; // If any field is empty, do nothing
  } else {
    // Show success message
    document.getElementById("success").style.display = "block";

    // Clear form fields after submission
    message.value = "";
    subject.value = "";
    email.value = "";
    fName.value = "";

    // Hide the success message after 3 seconds
    setTimeout(function () {
      document.getElementById("success").style.display = "none";
    }, 3000);
  }
};
