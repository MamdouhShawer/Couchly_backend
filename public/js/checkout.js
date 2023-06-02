const form=document.getElementById('checkform');
const firstName=document.getElementById('Fname');
const lastName=document.getElementById('Lname');
const phone=document.getElementById('phone');
const address=document.getElementById('adress');
const cardName=document.getElementById('cardN');
const cardNum=document.getElementById('card');
const expDate=document.getElementById('date');
const cvc=document.getElementById('cvc')

const ValInput=()=>
{
    const fnameVal=firstName.value.trim();
    const lnameVal=lastName.value.trim();
    const phoneVAl=phone.value.trim();
    const addressVal=address.value.trim();
    const cardNameVal=cardName.value.trim();
    const cardNumVal=cardNum.value.trim();
    const expDateVal=expDate.value.trim();
    const cvcVal=cvc.value.trim();


    if(fnameVal==='')
    {
        setError(firstName,'*');
    }
    else{
        setSuc(firstName);
    }

    if(lnameVal==='')
    {
        setError(lastName,'*');
    }
    else{
        setSuc(lastName);
    }

    if(phoneVAl==='')
    {
        setError(phoneVAl,'*');
    }
    else{
        setSuc(phoneVAl);
    }

    if(addressVal==='')
    {
        setError(addressVal,'*');
    }
    else{
      setSuc(addressVal);
    }

    if(cardNameVal==='')
    {
        setError(cardNameVal,'*');
    }
    else{
      setSuc(cardNameVal);
    }
   

    if(cardNumVal==='')
    {
        setError(cardNumVal,'*');
    }
    else 
    {
        if(cardNumVal.length<16)
        setWordError(cardNumVal,'The card number is not correct');
        else
        setSuccess(cardNumVal)
    }

    if(expDateVal==='')
    {
        setError(expDateVal,'*');
    }
    else{
        setSuc(expDateVal);
    }
    
    if(cvcVal==='')
    {
        setError(cvcVal,'*');
    }
    else{
      if(cvcVal.length<3)
      setWordError(cvcVal,'The CVC is not correct');
      else
      setSuccess(cvcVal)
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



form.addEventListener('submit',e=>{
    e.preventDefault();

    ValInput();
})