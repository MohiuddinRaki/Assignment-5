function addActiveButton(active){
    const productPrice = document.getElementById(active);
    const textValue = productPrice.innerText;
    const purchasebutton = document.getElementById('purchase-button');
    if(textValue !=='00'){
        purchasebutton.removeAttribute('disabled');
    }
    else{
        purchasebutton.setAttribute('disabled');
    }
}
document.getElementById('go-home').addEventListener('click', function(){
    const htotalPrice =document.getElementById('total-price');
    const hDiscountPrice =document.getElementById('discount-price');
    const hTotal = document.getElementById('total');
    const addElement = document.getElementById('add-element');
    const inputField = document.getElementById('coupon-field');
    htotalPrice.innerText= '00';
    hDiscountPrice.innerText = '00';
    hTotal.innerText = '00';
    addElement.innerText = '';
    inputField.value = 'Coupon code';
})