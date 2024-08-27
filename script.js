// script.js

function getFormvalue() {
    // Access the form element
    var form = document.getElementById("form1");
    
    // Retrieve the first name and last name values
    var firstName = form.elements["fname"].value;
    var lastName = form.elements["lname"].value;
    
    // Display the full name in an alert
    alert(firstName + " " + lastName);
}

