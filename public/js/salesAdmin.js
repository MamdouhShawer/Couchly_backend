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
const form=document.getElementById('form');
const ProductName=document.getElementById('ProductName');
const ProductCategory=document.getElementById('ProductCategory');
const MainPrice=document.getElementById('MainPrice');
const SalePrcent=document.getElementById('SalePercent');
const Mainimage=document.getElementById('Mainimage');


form.addEventListener('submit',e =>
{
    e.preventDefault();

    validateInputs();
});
const seterror=(element,message)=>
{
    const inputfield=element.parentElement;
    const errorDisplay=inputfield.querySelector('.error');

   errorDisplay.innerText=message;
   inputfield.classList.add('error');
   inputfield.classList.remove('success');
}
const setworderror=(element,message)=>
{
    const inputfield=element.parentElement;
    const errorDisplay=inputfield.querySelector('.erro');

   errorDisplay.innerText=message;
   inputfield.classList.add('erro');
   inputfield.classList.remove('success');

}
const setsuccess=element=>
{
    const inputfield=element.parentElement;
    const errorDisplay=inputfield.querySelector('.error');

   errorDisplay.innerText=message;
   inputfield.classList.add('success');
   inputfield.classList.remove('error');
}
const validateInputs=()=>
{
    const ProductNameValue=ProductName.value.trim();
    const ProductCategoryValue=ProductCategory.value.trim();
    const MainPriceValue=MainPrice.value.trim();
    const SalePercentValue=SalePrcent.value.trim();
    const MainimageValue=Mainimage.value.trim();


    if(ProductNameValue==='')
    {
        seterror(ProductName,'Product Name is required')
    }
    else
    {
        setsuccess(ProductName);

    }
    if(ProductCategoryValue==='')
    {
        seterror(ProductCategory,'Product Category is required')
    }
    else
    {
        setsuccess(ProductCategory);

    }
    if(MainPriceValue==='')
    {
        seterror(MainPrice,'Main Price is required')
    }
    else
    {
        setsuccess(MainPrice);

    }
    if(SalePercentValue==='')
    {
        seterror(SalePercent,'Sale Percent is required')
    }
    else
    {
        setsuccess(SalePrcent)
    }
    if(MainimageValue==='')
    {
        seterror(Mainimage,'Main image is required')
    }
    else
    {
        setsuccess(Mainimage);
    }
};
