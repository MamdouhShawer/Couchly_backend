
   /*
   
   function validatefirstname(mail) { 
        if (!/\S+@\S+\.\S+/.test(mail)) { 
          document.getElementById("errormail").innerHTML="Please enter a valid email address."; 
          return false; 
        } 
        return true; 
      } 
       
      function validatePassword(password) { 
        if (password.length < 8) { 
          document.getElementById("errorpassword").innerHTML="Password must be at least 8 characters long."; 
          return false; 
        } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*\W)/.test(password)) { 
          document.getElementById("errorpassword").innerHTML="Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character."; 
          return false; 
        } 
        return true; 
      } 
       
      function validateConfirmPassword(password, cpassword) { 
        if (password !== cpassword) { 
          document.getElementById("pwcErr").innerHTML="Passwords do not match."; 
          return false; 
        } 
        return true; 
      } 
       
      function validateAge(Age) { 
        let today = new Date(); 
        let birthDate = new Date(Age); 
        let age = today.getFullYear() - birthDate.getFullYear(); 
        let m = today.getMonth() - birthDate.getMonth(); 
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) { 
          age--; 
        } 
        if (age < 18) { 
          document.getElementById("errordate").innerHTML="You must be at least 18 years old to sign up."; 
          return false; 
        } 
        return true; 
      } 
       
      function validate(form) { 
        // Get form values 
        let mail = form.mail.value.trim(); 
        let password = form.password.value; 
        let cpassword = form.cpassword.value; 
        let Age = form.Age.value; 
        let gender = form.querySelector('input[name="gender"]:checked'); 
         
        let fail = false; 
         
        // Validate Email 
        if (validateEmail(mail)===false) { 
          fail = true; 
        } 
         
        // Validate Password 
        if (validatePassword(password)===false) { 
          fail = true; 
        } 
         
        // Validate Confirm Password 
        if (validateConfirmPassword(password, cpassword)===false) { 
          fail = true; 
        } 
         
        // Validate Age 
        if (validateAge(Age)===false) { 
          fail = true; 
        } 
         
        if (fail===true) { 
          return false; 
        } else { 
          return true; 
        } 
      } 
 
function validatesubmit(form){ 
 
// const form = document.getElementById('signup'); 
 
// Add a submit event listener to the form 
if(validate(form)===false){ 
form.addEventListener('submit', function(event) { 
  // Prevent the default form submission behavior 
  event.preventDefault(); 
   
 
}); 
return false; 
} 
return true; 
      }

*/

/*
const form=document.getElementById('form');
const firstName=document.getElementById('Fname');
const lastName=document.getElementById('Lname');
const phone=document.getElementById('phone');
const address=document.getElementById('adress');
const cardName = document.getElementById('nameCard');
const cardNum = document.getElementById('card');
const expDate = document.getElementById('date');
const cvcNum=document.getElementById('cvc');

function validatephone(phone) {
    var re = /((\[[0-9]\.))$/;
    return re.test(phone);
    }
    function validate() {
    $("#result").text("");
    var phoneNum = $("#email").val();
    if (validatephone(phone)) {
    $("#result").text(phone + " is valid :)");
    $("#result").css("color", "green");
    } else {
    $("#result").text(phone + " is not correct, please retry:(");
    $("#result").css("color", "red");
    }
    return false;
    }
    $("#validate").bind("click", validate);
    */
/*
const ValInput=()=>
{
    const firstVal=firstName.ariaValueMax.trim();
    const lastVal=lastName.ariaValueMax.trim();
    const phoneVal=phone.ariaValueMax.trim();
    const addressVal=address.ariaValueMax.trim();
    const cardNameVal=cardName.ariaValueMax.trim();
    const cardNumVal=cardNum.ariaValueMax.trim();
    const expDateVal=expDate.ariaValueMax.trim();
    const cvcNumVal=cvcNum.ariaValueMax.trim();

    if(firstVal==='')
    {
        setError(firstName,'*');
    }
    else{
        setSuc(firstName);
    }

    if(lastVal==='')
    {
        setError(lastName,'*');
    }
    else{
        setSuc(lastName);
    }

    if(phoneVal==='')
    {
        setError(phone,'*');
    }
    else{
        setSuc(phone);
    }

    if(addressVal==='')
    {
        setError(address,'*');
    }
    else{
        setSuc(address);
    }

    if(cardNameVal==='')
    {
        setError(cardName,'*');
    }
    else{
        setSuc(cardName);
    }

    if(cardNumVal==='')
    {
        setError(cardNum,'*');
    }
    else{
        if(checkCardNum(cardNumVal)==='false')
        {
            setWordError(cardNum,'card number is not 16 digits long');
            if(!/[0-9]/.test( cardNumVal[cardNum]))
            setWordError(cardNum,'Card number must be digits only');
            
        }
            else 
            {
                setSuccess(cardNum);
            }
    }

    if(expDateVal==='')
    {
        setError(expDate,'*');
    }
    else{
        setSuc(expDate);
    }

    if(cvcNumVal==='')
    {
        setError(cvcNum,'*');
    }
    else{
        if(checkCvcNum(cvcNumVal)==='false')
        {
            setWordError(cvcNum,'CVC is not correct');
            if(!/[0-9]/.test( cvcNumVal[cvcNum]))
            setWordError(cvcNum,'CVC must be digits only');
            
        }
            else 
            {
                setSuccess(cardNum);
            }
    }


}

function checkCardNum(str)
{
    if(str.length<16)
    { 
        return 'false';
    }
    else
    {
        return 'true';
    }
}

function checkCvcNum(str)
{
    if((str.length!=4)||(str.length!=3))
    {
        return 'false';
    }
    else
    {
        return 'true';
    }
}

const setError=(element,message)=>
{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');
  

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
}

const setWordError=(element,message)=>
{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.erro');

    errorDisplay.innerText=message;
    inputControl.classList.add('error');
   inputControl.classList.remove('success');
}


const setSuc=element=>
{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    errorDisplay.innerText='\u2713';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const setSuccess=element=>
{
    const inputControl=element.parentElement;
    const errorDisplay=inputControl.querySelector('.error');

    const remove=inputControl.querySelector('.erro');

    remove.innerText=' ';  

    errorDisplay.innerText='\u2713';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

form.addEventListener('submit',e=>{
    e.preventDefault();

    ValInput();
})
*/