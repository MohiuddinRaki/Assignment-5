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
    window.location.href = 'index.html';
})