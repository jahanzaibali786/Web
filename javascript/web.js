 alert("Welcome ! To Our website .After visiting plz don't forget to give Feedback THANK YOU !!")
 src="https://smtpjs.com/v3/smtp.js"
        function sendEmail() {
            Email.send({
                Host: "smtp.yourisp.com",
                Username: "username",
                Password: "password",
                To: 'them@website.com',
                From: "you@isp.com",
                Subject: "This is the subject",
                Body: "And this is the body"
            }).then(
                message => alert(message)
            )

        }
