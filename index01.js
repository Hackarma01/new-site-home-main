function sendEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "lexbritt11@gmail.com",
    Password: "B98286FB9DE8198F0F85409BD2C0C588062F",
    To: "billscosco0245@gmail.com",
    From: document.getElementById("email").value,
    Subject: "New Contact Info for Form Enquiry",
    Body:
      "Question 1 " +
      document.getElementById("q1").value +
      " <br> Answer 1: " +
      document.getElementById("a1").value +
      " <br> Question 2: " +
      document.getElementById("q2").value +
      " <br> Answer 2: " +
      document.getElementById("a2").value +
      "Question 3 " +
      document.getElementById("q3").value +
      " <br> Answer 3: " +
      document.getElementById("a3").value +
      " <br> Question 4: " +
      document.getElementById("q4").value +
      " <br> Answer 4: " +
      document.getElementById("a4").value

  }).then((message) => {
        // alert("Message")
        window.location.href = "page.html"

    });
}
