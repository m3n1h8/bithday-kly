// đông hồ đếm ngược
//
let hour= document.getElementById("countdownhour");
setInterval(() => {
const now = new Date();

const nowhour= now.getHours();
const nowminute= now.getMinutes();  
const nowsecond= now.getSeconds();
 
 hour.innerHTML= (23 - nowhour)+": "+( 59 - nowminute)+": "+(60 - nowsecond)
}, 1000);




      
//
//căn giữa khối đông hồ đếm ngược

const countdown = document.querySelector(".countdown");
const contentborder = document.querySelector(".contentborder");
const content= document.querySelector(".content")
const countdownWidth = countdown.getBoundingClientRect().width;

const leftcontentborder = (countdownWidth - 810) / 2;
const leftcontent = (countdownWidth - 770) / 2;
contentborder.style.left = `${leftcontentborder}px`;
content.style.left = `${leftcontent}px`;

//
// hiệu ứng đốt nến bánh sinh nhật và hiện chữ HAPPY BIRTHDAY 
const cake = document.getElementById("cake");
const fire1= document.getElementById("fire1");
const fire2= document.getElementById("fire2");
const fire3= document.getElementById("fire3");
const fire4= document.getElementById("fire4");
const fire5= document.getElementById("fire5");
const fire6= document.getElementById("fire6");
const fire7= document.getElementById("fire7");
const notify= document.getElementById("notify");
let time= document.querySelector(".time");
function burnfire(){
    fire1.style.display="block";
   ;
    fire2.style.display="block";

    fire3.style.display="block";
    fire4.style.display="block";
    fire5.style.display="block";
    fire6.style.display="block";
    fire7.style.display="block";
    fire1.setAttribute("data-aos", "zoom-in-up")
    fire1.setAttribute("data-aos-duration", "2000")
    fire2.setAttribute("data-aos", "zoom-in-up")
    fire2.setAttribute("data-aos-duration", "2000")
    fire3.setAttribute("data-aos", "zoom-in-up")
    fire3.setAttribute("data-aos-duration", "2000")
    fire4.setAttribute("data-aos", "zoom-in-up")
    fire4.setAttribute("data-aos-duration", "2000")
    fire5.setAttribute("data-aos", "zoom-in-up")
    fire5.setAttribute("data-aos-duration", "2000")
    fire6.setAttribute("data-aos", "zoom-in-up")
    fire6.setAttribute("data-aos-duration", "2000")
    fire7.setAttribute("data-aos", "zoom-in-up")
    fire7.setAttribute("data-aos-duration", "2000")
    time.removeChild(notify);
    const timewish =document.createElement("p");
    timewish.innerHTML="HAPPY BIRTHDAY TO YOU";
    timewish.classList.add("timewish");
    timewish.setAttribute("data-aos", "zoom-in-up");
    timewish.setAttribute("data-aos-duration", "2000");
    time.appendChild(timewish);
    AOS.refresh(); 
}
cake.addEventListener("click", burnfire);





//
// chiếu video anh da đen và ẩn đi khi ấn vào khoang trống

 const layoutcontainer= document.querySelector(".layoutcontainer");
 const videobox= document.querySelector(".videobox");
 const video= document.querySelector("video");
 const audio= document.querySelector("audio");
function watchvideo(){
    layoutcontainer.style.display="flex";
    layoutcontainer.style.opacity="1";
    
   
    setTimeout(()=>{video.play()}, 2000);
    // phát video khi ấn vào khoang trống
    audio.pause();// tạm dừng nhạc khi bật video
    AOS.refresh(); 
}



//
// ẩn video 
function hide(){
   layoutcontainer.style.display="none";
   
    video.pause();// tạm dừng video khi ấn vào khoang trống
    audio.play();// phát nhạc khi tắt video
}


//
//cuộn đến vị trí quà
function scrolltogift(){
    document.querySelector(".giftbox").scrollIntoView({
        behavior: "smooth",
        start: "block",
    });
}
