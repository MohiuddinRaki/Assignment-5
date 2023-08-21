let total = 0;
function  addCalcaulationTotalPrice(target){
    const productPrice = document.getElementById(target);
    const price = productPrice.innerText;
    total = parseFloat(total) + parseFloat(price);
    const totalPrice = document.getElementById("total-price").innerText = total.toFixed(2);
    const initialDiscountAmount = document.getElementById('discount-price');
    const finalDicountPrice = initialDiscountAmount.innerText;
    const finalTotalPrice = totalPrice - parseFloat(finalDicountPrice);
    document.getElementById('total').innerText = finalTotalPrice.toFixed(2);
    return totalPrice;
}
document.getElementById('coupon-field').addEventListener('keyup', function(event){
    const text = event.target.value;
    const applyButton = document.getElementById('apply-button');
    if(text === 'SELL200'){
        applyButton.removeAttribute('disabled');
    }
    else{
        applyButton.setAttribute('disabled', true);
    }
})
document.getElementById('apply-button').addEventListener('click', function(){
    const divided = 20 / 100;
    const discountAmount = total * divided;
    document.getElementById('discount-price').innerText = discountAmount.toFixed(2);
    const finalPrice = total - discountAmount;
    document.getElementById('total').innerText = finalPrice.toFixed(2);
})




