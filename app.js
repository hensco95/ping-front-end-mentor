let btn = document.getElementById("submit_btn");
let input = document.querySelector(".email")
let span = document.querySelector(".error_msg");

var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value.match(mailformat)) {
    alert("valid Email")
    // return true;
  } else {
      span.classList.add("show_span");
      span.classList.add("other_show");
      input.classList.add("error");
    setTimeout(() => {
      span.classList.remove("show_span");
      span.classList.remove("other_show");
      input.classList.remove("error");
    },1500)
  }
  
})