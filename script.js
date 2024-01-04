
function foo(){
    var first_name = document.getElementById("firstname").value;
    var middle_name = document.getElementById("middlename").value;
    var lastname = document.getElementById("lastname").value;
    var email_val = document.getElementById("email").value;
    console.log(`Given Name \n ${first_name} ${middle_name} ${lastname} \nEmail \n ${email_val}`);
}