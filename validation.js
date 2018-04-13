function validate()
{
    var flag=true;
    //check whether all fields are empty or not

    //first name
    if(document.registrationForm.first.value.length<1)
    {
        flag=false;
        alert("Please fill the first name");
        document.registrationForm.first.focus();
    }

    //last name
    if(document.registrationForm.last.value.length<1)
    {
        flag=false;
        alert("Please fill the last name");
        document.registrationForm.last.focus();
    }

    //select department option
    if(document.registrationForm.department.value==="selectOption")
    {
        flag=false;
        alert("Please select Department");
        document.registrationForm.department.focus();
    }

    //email
    if(document.registrationForm.email.value<1)
    {
        flag=false;
        alert("Please fill email");
        document.registrationForm.email.focus();
    }

    //birthdate
    if(!document.registrationForm.date.value)
    {
        flag=false;
        alert("Please enter date");
        document.registrationForm.date.focus();
    }
    //pin code
    if(document.registrationForm.pin.value<1)
    {
        flag=false;
        alert("Please enter pin code");
        document.registrationForm.pin.focus();
    }
    //mobile no
    if(!document.registrationForm.mobile.value)
    {
        flag=false;
        alert("Please enter mobile no");
        document.registrationForm.mobile.focus();
    }

    //address
    if(!document.registrationForm.address.value)
    {
        flag=false;
        alert("Please enter address");
        document.registrationForm.address.focus();
    }
    //check whether mobile no contains all digits
    if(isNaN(document.registrationForm.mobile.value) && flag)
    {
        flag=false;
        alert("Phone no should be no");
        document.registrationForm.mobile.focus();
    }

    //password
    if(!document.registrationForm.password.value)
    {
        flag=false;
        alert("Please enter password");
        document.registrationForm.password.focus();
    }
    //confirm password
    if(!document.registrationForm.cpassword.value)
    {
        flag=false;
        alert("Please enter confirm password");
        document.registrationForm.cpassword.focus();
    }
    //password and confirm password did not match
    if(flag)
    {
        if(document.registrationForm.password.value!==document.registrationForm.cpassword.value)
        {
            flag=false;
            alert("Password and confirm password did not match");
            document.registrationForm.cpassword.focus();
        }
    }

    //pin code should be digit only no
    if(flag && isNaN(document.registrationForm.pin.value))
    {
        flag=false;
        alert("Pin Code should be Nan");
        document.registrationForm.pin.focus();
    }
    if(flag)
    {
        var ret=confirm("Are you sure you want to submit your form ?")
        if(ret==true)
        {
            document.write("Welcome "+document.registrationForm.first.value);
        }
    }

    //
}