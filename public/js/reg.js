const form=document.getElementById('form');
const firstName=document.getElementById('first');
const lastName=document.getElementById('last');
const userName=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('pass');
const ConfirmPass=document.getElementById('pass2');
const submitButton = document.getElementById('bt');

const ValInput=()=>
{
    const fnameVal=firstName.value.trim();
    const lnameVal=lastName.value.trim();
    const userVAl=userName.value.trim();
    const emailVal=email.value.trim();
    const passwordVal=password.value.trim();
    const ConfirmPassVal=ConfirmPass.value.trim();
    let flag=true;

    if(fnameVal==='')
    {
        setError(firstName,'*');
        flag=false;
    }
    else{
        setSuc(firstName);
    }

    if(lnameVal==='')
    {
        setError(lastName,'*');
        flag=false;
    }
    else{
        setSuc(lastName);
    }

    if(userVAl==='')
    {
        setError(userName,'*');
        flag=false;
    }
    else{
        setSuc(userName);
    }

    if(emailVal==='')
    {
        setError(email,'*');
        flag=false;
    }
    else if(!isValidEmail(emailVal)){
        setWordError(email,'Invalid email');
        flag=false;
    }else{
        setSuccess(email);
    }
    if(passwordVal==='')
    {
        setError(password,'*');
        flag=false;
    }
    else
    {
        if(checkPassSize(passwordVal)==='false')
        {
            setWordError(password,'Small password');
            if(!/[A-Z]/.test( passwordVal[0]))
            setWordError(password,'fisrt letter Must be upperCase');
            flag=false;
        }
            else 
            {
                setSuccess(password);
            }
    }

    if(ConfirmPassVal==='')
    {
        setError(ConfirmPass,'*');
        flag=false;
    }
    else 
    {
        if(ConfirmPassVal!==passwordVal)
        {
            flag=false;
            setWordError(ConfirmPass,'Passwords don\'t match');
        }
        else
        setSuccess(ConfirmPass)
    }
    if(flag==false)
    submitButton.disable=true;
    else
    submitButton.disable
}

const isValidEmail = email=>
{
  const sample=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return sample.test(String(email).toLowerCase());
}

function checkPassSize(str)
{
    if(str.length<8)
    return 'false'

    return 'true'
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