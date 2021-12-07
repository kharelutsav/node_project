const btn = document.querySelector('button');
document.forms["signupForm"].onsubmit = () => {
    let pw1 = document.forms["signupForm"]["password"].value;
    let pw2 = document.forms["signupForm"]["repassword"].value;
    console.log(pw1, pw2);
    if (pw1 !== pw2){
        alert("Passwords don't match.");
        return false;
    }
    else{
        console.log("Good Job");
    }
}