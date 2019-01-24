var attempts= 100;
function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var password= document.getElementById("password").value;
    if (username == "aaron" && password == "lafrentz") {
        alert("Login successfully");
        window.location = "success.html"; // Redirecting to other page.
        return false;
    }
    else {
        attempt--;// Decrementing by one.
        alert("You have left " + attempt + " attempt;");
        // Disabling fields after 3 attempts.
        if (document == 0) {
            document.getElementById("username").disabled = true;
            document.getElementById("password").disabled = true;
            document.getElementById("submit").disabled = true;
            document.getElementById("password").disabled = true;
            return false;
        }
    }
}