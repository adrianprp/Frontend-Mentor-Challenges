const form = document.getElementById("form");
const email = document.getElementById("email");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const emailVal = email.value;

  if (!validateEmail(emailVal)) {
    form.classList.add("error");

  } else {
    form.classList.remove("error");

  }
});


const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};
