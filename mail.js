function sendEmail() {
    Email.send({
      Host : "smtp.elasticemail.com", 
      Username: "portal@shopyourtrip.com",
      Password : "9FE051206C194CE6C0BC6E4D098F4CF345EA",
      To: 'dr.sidharat@gmail.com',
      From: "portal@shopyourtrip.com",
      Subject: "Testing Email From Ravi",
      Body: "Check your email You have Received Email From Ravi",
    })
      .then(function (message) {
        alert(message)
      });
  }