
console.log('heloo');

function getElementtById( quantity, price, display){
      const kitkatCost = document.getElementById(quantity).value;
      const kikatQuantity = document.getElementById(price).innerText;
     const totalCost = parseInt(kikatQuantity) * parseInt(kitkatCost);
     
     return  document.getElementById(display).innerText = totalCost;
}
   let sum = 0;
document.getElementById('kitkat-buy-btn').addEventListener('click',function(){
     
//       const kitkatCost = document.getElementById('kitkat-quantity').value;
//       const kikatQuantity = document.getElementById('kitkat-price').innerText;
//      const totalCost = parseInt(kikatQuantity) * parseInt(kitkatCost);
    
//       document.getElementById('chocolate').innerText = totalCost;

 const newDisplay = getElementtById( 'kitkat-quantity', 'kitkat-price', 'chocolate');
sum = sum + newDisplay; 
document.getElementById('total').innerText = sum;
     
})



document.getElementById('rose-buy-btn').addEventListener('click', function(){

    const rose =  getElementtById( 'rose-quantity', 'rose-price', 'rose');
    sum = sum + rose; 
document.getElementById('total').innerText = sum;
     

})

 

document.getElementById('diary-buy-btn').addEventListener('click', function(){

     const newDisplay = getElementtById( 'diary-quantity', 'diary-price', 'diary');

      sum = sum + newDisplay; 
document.getElementById('total').innerText = sum;
     

})


document.getElementById('apply-btn').addEventListener('click', function(){

     const discountValueField = document.getElementById('promo-code').value;
     if(discountValueField == '101'){

      const discount = (sum * 10) / 100;
      const finalAll = sum - discount;
     
      document.getElementById('all-total').innerText = finalAll;

     
     
     }
     else{
      return alert('you are not elligible to discount')
     }
     
})