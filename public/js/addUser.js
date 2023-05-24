const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=>{
    const li=item.parentElement;

    item.addEventListener('click', function(){
        allSideMenu.forEach(i=>{
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});


// Toggle Sidebar 
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click',function() {
    sidebar.classList.toggle('hide');
})




const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function(e){
    if(window.innerWidth < 576){
        e.preventDefault();
    searchForm.classList.toggle('show');
    if(searchForm.classList.contains('show')) {
        searchButtonIcon.classList.replace('bx-search', 'bx-x');
    } else {
        searchButtonIcon.classList.replace( 'bx-x', 'bx-search');
    }
    }
    
})


if(window.innerWidth < 768) {
    sidebar.classList.add('hide');
} else if (window.innerWidth > 576) {
    searchButtonIcon.classList.replace( 'bx-x', 'bx-search');
    searchForm.classList.remove('show');
}

window.addEventListener('resize', function() {
    if (this.innerWidth > 576) {
        searchButtonIcon.classList.replace( 'bx-x', 'bx-search');
        searchForm.classList.remove('show');
    }
})

const form = document.getElementById('form');
const firstname = document.getElementById('firstname');
const lastname = document.getElementById('lastname');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmpassword = document.getElementById('confirmpassword');

form.addEventListener('submit',(event)=> {
    event.preventDefault();

    validate();
})

const isEmail = (emailval)=> {
    var atSymbol = emailval.indexOf('@');
    if(atSymbol < 1){
        return false;
    }
    var dot=email.lastIndexOf('.');
    if(dot <= atSymbol + 2)
    {
        return false;
    }
    if(dot === emailval.length - 1)
    {
        return false;
    }
    return true;
}

function validate() {
    const firstnameVal = firstname.value.trim();
    const lastnameval = lastname.value.trim();
    const usernameval = username.value.trim();
    const emailval = email.value.trim();
    const passwordval = password.value.trim();
    const confirmpasswordval = confirmpassword.value.trim();

    //firstname 
    if(firstnameVal==="")
    {
        setErrorMsg(firstname,'username cannot be blank');
    }
    else if(firstnameVal.length <=3 ) {
        setErrorMsg(firstname,'firstname must be at least 4 characters');
    }
    else {
        setSuccessMsg(firstname);
    }

    //lastname
    if(lastnameval==="")
    {
        setErrorMsg(lastname,'lastname cannot be blank');
    }
    else if(lastnameval.length <=3 ) {
        setErrorMsg(lastname,'lastname must be at least 4 characters');
    }
    else {
        setSuccessMsg(lastname);
    }

    //username
    if(usernameval==="")
    {
        setErrorMsg(username,'username cannot be blank');
    }
    else if(usernameval.length <=3 ) {
        setErrorMsg(uername,'username must be at least 4 characters');
    }
    else {
        setSuccessMsg(username);
    }

    //email
    if(emailval==="")
    {
        setErrorMsg(email,'email cannot be blank');
    }
    else if(!isEmail(emailval)){
        setErrorMsg(email,'email is not a valid ');
    }
    else {
        setSuccessMsg(email);
    }

    //password
    if(passwordval==="")
    {
        setErrorMsg(password,'password cannot be blank');
    }
    else if(passwordval.length <=7 ) {
        setErrorMsg(password,'password must be at least 8 characters');
    }
    else {
        setSuccessMsg(password);
    }

    //confirm password
    if(confirmpasswordval === "")
    {
        setErrorMsg(confirmpassword,'confirm password cannot be blank');
    }
    else if(passwordval != confirmpasswordval) {
        setErrorMsg(confirmpassword,'password doesnot match');
    }
    else {
        setSuccessMsg(confirmpassword);
    }
    setSuccessMsg(usernameval);
}

function setErrorMsg(input,errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = errormsgs;   
}

function setSuccessMsg(input){
    const formControl =  input.parentElement;
    formControl.className = "form-control success";
}
