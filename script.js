document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Retrieve form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementsByName("message")[0].value;
  
    // Perform form validation
    if (name.trim() === "" || email.trim() === "" || subject.trim() === "" || message.trim() === "") {
      alert("Please fill in all fields");
      return;
    }
  
    // Perform form submission (replace with your own logic)
    // Logging form data to the console
    console.log("Form submitted!");
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Subject: " + subject);
    console.log("Message: " + message);
  
    // Reset form fields
    document.getElementById("contactForm").reset();
  });

