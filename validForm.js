function validation() {
    let user = document.getElementById('user').value;
    let pass = document.getElementById('password').value;
    let confirmPass = document.getElementById('confirmPassword').value;
    let email = document.getElementById('emailid').value;
    let MobileNo = document.getElementById('mobileNum').value;
    //Username
    if (user.value == "") {
        document.getElementById('username').innerHTML = "*** Please fill the username field.";
        return false;
    }
    if ((user.length <= 2) || (user.length > 20)) {
        document.getElementById('username').innerHTML = "*** username must be between 2 to 20 character.";
        return false;
    }
    if (!isNaN(user)) {
        document.getElementById('username').innerHTML = "*** only character are fill up not a number!!! .";
        return false;
    }
    //Password
    if (pass == "") {
        document.getElementById('pass').innerHTML = "*** Please fill the password field.";
        return false;
    }
    if ((pass.length <= 5) || (pass.length > 10)) {
        document.getElementById('pass').innerHTML = "*** password must be between 5 to 10 character.";
        return false;
    }
    //Confirm Password
    if (confirmPass == "") {
        document.getElementById('confirmPass').innerHTML = "*** Please fill the confirm password field.";
        return false;
    }
    if (pass != confirmPass) {
        document.getElementById('confirmPass').innerHTML = "*** password are not matching.";
        return false;
    }
    //Email

    if (email == "") {
        document.getElementById('email').innerHTML = "*** Please fill the email field.";
        return false;
    }
    if (email.indexOf('@') <= 0) {
        document.getElementById('email').innerHTML = "*** @ is in Invalid Position";
        return false;
    }
    if ((email.charAt(email.length - 4) != '.') && (email.charAt(email.length - 3) != '.')) {
        document.getElementById('email').innerHTML = "*** Invalid Position";
        return false;
    }
    //Mobile Number
    if (MobileNo == "") {
        document.getElementById('mobileNo').innerHTML = "*** Please fill the mobile number field.";
        return false;
    }
    if (isNaN(MobileNo)) {
        document.getElementById('mobileNo').innerHTML = "*** Please fill digits only.";
        return false;
    }
    if (MobileNo.length != 10) {
        document.getElementById('mobileNo').innerHTML = "*** Please fill excatly 10 numbers.";
        return false;
    }

}