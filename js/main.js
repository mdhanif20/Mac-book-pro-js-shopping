// memory cost function start here 
function memoryCost(memoryType){
    const memoryCost = document.getElementById(memoryType);
    const highMemorycost = document.getElementById("high-memory");
    const previousMemoryExpense = document.getElementById("previous-memory-cost");
    if(memoryCost==highMemorycost){
        previousMemoryExpense.innerText = 180;
    }
    else{
        previousMemoryExpense.innerText = 0;
    }
    return total();
}
// memory cost function end here 

// storage cost function start here  
function storageCost(stroageType){
    const storageCost = document.getElementById(stroageType);
    const lowStorageCost = document.getElementById("low-storage");
    const midStorageCost = document.getElementById("mid-storage");
    const heighStorageCost = document.getElementById("high-storage");
    const previousStorageCost = document.getElementById("previous-storage-cost");
    if(storageCost==lowStorageCost){
        previousStorageCost.innerText = 0;
    }
    else if(storageCost==midStorageCost){
        previousStorageCost.innerText = 100;
    }
    else if(storageCost==heighStorageCost){
        previousStorageCost.innerText = 180;
    }
    return total();
}
// storage cost function end here  

// delivery cost function start here 
function deliveyCost(delivery){
    const deliveryCost = document.getElementById(delivery);
    const freeDelivery = document.getElementById("free-delivery");
    const previousDelivery = document.getElementById('previous-delivery');
    if(deliveryCost==freeDelivery){
        previousDelivery.innerText = 0;
    }
    else{
        previousDelivery.innerText = 20;
    }
    return total();
}
// delivery cost function end here 

// calculation the product price start here 
function total(){
    const regularPrice = document.getElementById("regular-price").innerText;
    const changedMemoryCost =document.getElementById('previous-memory-cost').innerText;
    const changedStorageCost = document.getElementById("previous-storage-cost").innerText;
    const changedDeliveryFee = document.getElementById("previous-delivery").innerText;
    const previousTotalPrice = document.getElementById('previous-total');
    const beforePomoFinalTotal = document.getElementById("before-pomo");
    const totalPrice = parseFloat(regularPrice) + parseFloat(changedMemoryCost) + parseFloat(changedStorageCost) + parseFloat(changedDeliveryFee );
    previousTotalPrice.innerText = totalPrice;
    beforePomoFinalTotal.innerText = totalPrice;
}
// calculation the product price end here 

// pomo code function start here
function pomoCode(){
    const pomoInput = document.getElementById("pomo-input");
    const pomoInputValue = pomoInput.value;
    const sellorPomo = 'stevekaku';
    if(pomoInputValue == sellorPomo){
       const totalEditPrice = document.getElementById('previous-total').innerText;
       const beforePomoTotalPrice = document.getElementById('before-pomo');
       const afterPomoTotalDescount = parseFloat(totalEditPrice)*20/100;
       const afterPomoTotalPrice = parseFloat(totalEditPrice) - afterPomoTotalDescount;
       beforePomoTotalPrice.innerText = afterPomoTotalPrice;
       pomoInput.value='';
    }
} 
// pomo code function end here 
