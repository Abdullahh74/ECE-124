function pw(str) {

    var constant = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[_,-,#,&,*,@]).{8}$/;
    return constant.test(str);
}




function check(form) {
    
    for (var i = 0; i <= 8; i++) {
        if (form.p1.value[i] == " ") {
            alert("space is not allowed in password");
            form.p1.focus();

            return false;
        }
        else { continue; }
    }


    if (form.p1.value[0] >= 'A' && form.p1.value[0] <= 'Z') {
        i = 0;

    }
    else {
        alert("Password must start Upper cher");
        form.p1.focus();
        return false;
    }




    if (form.p1.value != "" && form.p1.value == form.p2.value) {
        if (!pw(form.p1.value)) {
            alert("The password you have entered is not valid! , password must consist of only 8 characters including capital and small case and digits");
            form.p1.focus();
            return false;
        }
    }


    else {
        alert("Password isn't Match");
        form.p1.focus();
        return false;
    }


    if(form.gender.value == 'choose'){
        alert("Enter your Gender");
        return false;
    }
    return alert("Thank you for Sign Up. Now, You are Member of Our Family");



}

function check1(form) {
    if (form.subject.value == "") {
        alert("ُEnter Your Message ..... ");
        form.subject.focus();
        return false;
    }
    return alert("Thank You for message. We contact with You soon")
    window.location.href = 'home.html';
}
