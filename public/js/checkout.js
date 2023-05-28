const form=document.getElementById('form');
const firstName=document.getElementById('Fname');
const lastName=document.getElementById('Lname');
const phone=document.getElementById('phone');
const address=document.getElementById('adress');
const cardName = document.getElementById('nameCard');
const cardNum = document.getElementById('card');
const expDate = document.getElementById('date');
const cvcNum=document.getElementById('cvc');

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
