    var userNameValue = [];
    var passwordValue = [];
    var ageValue = [];
    var genderValue = [];
    var phoneNumberValue = [];



    var users = [
    {
    userName: "User2",
    password: "Pass2#",
    gender: "male",
    phoneNumber: "01145284291",
    age: 20
    }
    ];


    function data_user() {
    userNameValue = document.getElementById("SingUp-txtUserName").value;
    passwordValue = document.getElementById("SingUp-txtPass").value;
    ageValue = document.getElementById("SingUp-age").value;
    genderValue = document.querySelector("#SignUpForm input[name='singup-gender']:checked").value;
    phoneNumberValue = document.getElementById("SingUp-phoneNumber").value;

    }
    function funcSignUp() {
    data_user();
    validate();
    }

    function validate() {

    if (validatePass(passwordValue) && validatePhone() && validateAge()) {

    saveUser();
    }
    }
    function existansTest() {
    users.some(e => {
    if (e.userName == userNameValue) {
    alert("Username is unique, Please Change username!");
    return false;
    }
    else
    return true;
    });
    }
    function validatePass(myPass) {

    if (myPass.length > 8) {
    alert("The Password Must be less than 8 chars");
    return false;
    }


    const lettersRegex = /[a-z]|[A-Z]/;
    const numbers = /[0-9]/;
    if (!lettersRegex.test(myPass) || !numbers.test(myPass)) {
    alert("Password composed of char and integers");
    return false;
    }
    return true
    }

    function validatePhone() {

    if (phoneNumberValue.length != 11) {
    alert("Phone Number must 11");
    return false;
    }
    else
    return true;
    }

    function validateAge() {

    if (ageValue >= 18 && ageValue <= 60) {
    return true;
    }
    else {
    alert("Age between 18 and 60");
    return false;
    }
    }
    function saveUser() {
    let user = new Object;
    user.userName = userNameValue;
    user.password = passwordValue;
    user.gender = genderValue;
    user.phoneNumber = phoneNumberValue;
    user.age = ageValue;

    users.push(user);
    alert("User Saved Successefully!");
    document.querySelectorAll('#SingUp-txtUserName, #SingUp-txtPass, \
    #SingUp-phoneNumber, #SingUp-age').forEach(e => e.value = '');
    }


    function funcLogin() {
    let theUserName = '';
    let thePass = '';
    theUserName = document.getElementById("Login-txtUserName").value;
    thePass = document.getElementById("Login-txtPass").value;

    if (theUserName == '' && thePass == '')
    alert("Please fill data ");

    else {
    users.some(e => {
    if (e.userName == theUserName && e.password == thePass) {
    alert(`Go Ahead Man`);
    window.location.assign("rewiw.html");
    }
    else {
    alert("not Sccesfull");
    }
    });
    }

    }

    function funcForgetPass() {
    let theUserName = '';
    let thePass = '';
    theUserName = document.getElementById("fp-userName").value;
    thePass = document.getElementById("fp-txtPass").value;

    if (theUserName == '' || thePass == '')
    alert("Please fill the data befor login");
    else {
    users.some(e => {
    if (e.userName == theUserName) {
    if (validatePass(thePass)) {
    alert(`old\`s passwored: ${e.password} new pass:${thePass}`);
    e.password = thePass;
    }
    }
    else{
    alert("User Not Exist!");
    }
    });
    }
    }



    
    // function funcForgetPass() {
    //     var forget_name=document.getElementById("fp-userName").value;
    //     var forget_pass=document.getElementById("fp-txtPass").value;
    //     if(forget_name===users.userName){
    //         users.password=forget_pass;
    //         console.log(users);
    //     }else{
    //         alert("User not found");
    //     }
    // }