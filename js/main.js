 /*------------------
  memory price function start here 
  ------------------- */
function memoryCost(memoryType){
    // memory price button call here 
    const memoryInputPrice = document.getElementById(memoryType);
    // Memory 16GB button call here 
    const memoryPrice16gb = document.getElementById("memory-16gb");
    // Memory price showing place call here 
    const memoryPrice = document.getElementById("previous-memory-cost");
    // for 16GB memory price is change here
    if(memoryInputPrice==memoryPrice16gb){
        memoryPrice.innerText = 180;
    }
    // for 8GB Memory price is change here
    else{
        memoryPrice.innerText = 0;
    }
    // calculation total price function call here 
    total();
}
 /*----------------------
 memory price function end here 
 ------------------------- */



 
/*---------------------
 storage price function start here 
 --------------------- */ 
function storageCost(stroageType){
    // storage button call here 
    const storagePrice = document.getElementById(stroageType);
    // Storage Button 256GB call here 
    const storagePrice256gb = document.getElementById("storage-256gb");
     // Storage Button 512GB call here 
    const storagePrice512gb = document.getElementById("storage-512gb");
     // Storage Button 1TB call here 
    const storagePrice1tb = document.getElementById("storage-1tb");
    // storage price showing place call here 
    const storagePriceReset = document.getElementById("previous-storage-cost");
     // for 256GB storage price is change here
    if(storagePrice==storagePrice256gb){
        storagePriceReset.innerText = 0;
    }
    // for 512GB storage price is change here
    else if(storagePrice==storagePrice512gb){
        storagePriceReset.innerText = 100;
    }
    // for 1TB storage price is change here
    else if(storagePrice==storagePrice1tb){
        storagePriceReset.innerText = 180;
    }
     // calculation total price function call here 
    total();
}
/*-------------------------
  storage price function end here   
  ------------------------*/



/* -------------------
delivery cost function start here  
-------------------------*/
function deliveyCost(delivery){
    // delivery button call here 
    const deliveryCost = document.getElementById(delivery);
    // free delivery button call here 
    const freeDelivery = document.getElementById("free-delivery");
    // delivery cost showing place call here 
    const previousFee = document.getElementById('delivery-fee');
    // for free delivery 
    if(deliveryCost==freeDelivery){
        previousFee.innerText = 0;
    }
    // for argent delivery 
    else{
        previousFee.innerText = 20;
    }
    // calculation total price function call here 
    total();
}
/*--------------------
 delivery cost function end here 
 --------------------*/ 



 /*--------------------
  calculation the product price start here
  ---------------------  */
function total(){
    // regular price area call here 
    const regularPrice = document.getElementById("regular-price").innerText;
    // final memory price area call here 
    const finalMemoryPrice =document.getElementById('previous-memory-cost').innerText;
    // final storage price area call here 
    const finalStoragePrice = document.getElementById("previous-storage-cost").innerText;
    // final delivery charge area call here 
    const finalDeliveryFee = document.getElementById("delivery-fee").innerText;
    // total price showing area call here 
    const totalPrice = document.getElementById('previous-total');
    // pomo total price showing here 
    const pomoFinalTotal = document.getElementById("before-pomo");
    // total price calculation 
    const sumTotalPrice = parseFloat(regularPrice) + parseFloat(finalMemoryPrice) + parseFloat(finalStoragePrice) + parseFloat(finalDeliveryFee );
    totalPrice.innerText = sumTotalPrice;
    pomoFinalTotal.innerText = sumTotalPrice;
}
/*----------------
 calculation the product price end here  
 -----------------*/



/*-------------------
 pomo code function start here
 ------------------- */
function pomoCode(){
    // pomo input call here 
    const pomoInput = document.getElementById("pomo-input");
    const pomoInputValue = pomoInput.value;
    // sellor given pomo code here 
    const sellorPomo = 'stevekaku';
    // compare with sellor pomo code and customer pomo code 
    if(pomoInputValue == sellorPomo){
        // total amount call here 
       const totalSumPrice = document.getElementById('previous-total').innerText;
        // after using pomo code price showing place call here 
       const pomoDiscountPrice = document.getElementById('before-pomo');
        // 20% discount by using pomo code 
       const afterPomoTotalDescount = parseFloat(totalSumPrice)*20/100;
        // pomo discount amount subtruncate and get update price
       const afterPomoTotalPrice = parseFloat(totalSumPrice) - afterPomoTotalDescount;
       pomoDiscountPrice.innerText = afterPomoTotalPrice;
       pomoInput.value='';
    }
} 
/* ------------------
pomo code function end here 
-------------------- */
