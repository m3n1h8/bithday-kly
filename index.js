let hour= document.getElementById("countdownhour");

setInterval(() => {
const now = new Date();

const nowhour= now.getHours();
const nowminute= now.getMinutes();  
const nowsecond= now.getSeconds();
 
 hour.innerHTML= (23 - nowhour)+": "+( 59 - nowminute)+": "+(60 - nowsecond)
}, 1000);
