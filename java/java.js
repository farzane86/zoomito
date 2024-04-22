const scrollToTop= document.querySelector('.scrollToTop');
const carts =document.querySelectorAll(".cart");
const sideHidden =document.querySelector(".cart-widget-side");
const closeSideWidget =document.querySelector(".close-side-widget");
const wdFill =document.querySelector(".wd-fill");
const mySingleBtn =document.querySelector("#mySingleBtn");
const mySingleBtn1 =document.querySelector("#mySingleBtn1");
const widgetmultiContent =document.querySelector(".widgetmulti-content");
const widgetmultiCloseX =document.querySelector(".widgetmulti-close-x");
const owlStag0 =document.querySelector("#owl-stage-0");
const owlStag1 =document.querySelector("#owl-stag-1");
const owlStag2 =document.querySelector("#owlStag2");
const owlItem1 =document.querySelectorAll("#owl-stag-1>.owl-item");
const owlItem2 =document.querySelectorAll("#owlStag2>.owl-item");
const owlDrag1 =document.querySelectorAll(".owl-drag-1");
const owlDot7 =document.querySelector(".elementor-7 .owl-dots");
const owlnav7 =document.querySelectorAll(".elementor-7 .owl-nav>.wd-btn-arrow");
const owlnav5 =document.querySelectorAll(".elementor-5 .owl-nav>.wd-btn-arrow");
const owlPrev =document.querySelectorAll(".owl-prev");
const owlNext =document.querySelectorAll(".owl-next");
const wishlistBtn =document.querySelectorAll(".wd-wishlist-btn");
const generalHeaderInner =document.querySelector(".whb-general-header-inner");
const logoImg =document.querySelector(".wd-logo img");

console.log(owlnav5);
console.log(window.getComputedStyle(owlItem2[1]).getPropertyValue("width"))

window.addEventListener("scroll",()=>{
    // console.log(this.scrollY);
    if (this.scrollY>=200) {
        generalHeaderInner.classList.add("header-chang");
        scrollToTop.classList.add("button-show");
        logoImg.style.maxWidth =240+"px";
        logoImg.style.transition =  .5+ "s";
    }else{
        scrollToTop.classList.remove("button-show");
        generalHeaderInner.classList.remove("header-chang");
        logoImg.style.maxWidth =250+"px";
    }
})

scrollToTop.addEventListener('click',(e)=>{
    e.preventDefault();
    window.scrollTo({top: 0, behavior: "smooth"});
})
carts.forEach(cart => {
    cart.addEventListener('click',()=>{
        sideHidden.classList.add("wd-opened");
        wdFill.classList.add("wd-close-side-opened");
    })
});

closeSideWidget.addEventListener('click',()=>{
    sideHidden.classList.remove("wd-opened");
    wdFill.classList.remove("wd-close-side-opened");

})
mySingleBtn.addEventListener("click",()=>{
    mySingleBtn.style.display="none";
    mySingleBtn1.style.display="flex";
    widgetmultiContent.style.display="block";
})
mySingleBtn1.addEventListener("click",closeX);
widgetmultiCloseX.addEventListener("click",closeX);
function closeX() {
    mySingleBtn.style.display="flex";
    mySingleBtn1.style.display="none";
    widgetmultiContent.style.display="none";
}
wishlistBtn.forEach(wbtn => {
    wbtn.addEventListener("click",(e)=>{
        e.preventDefault();
       wbtn.innerHTML=`<a href="#" class="button">
       <i class="fa-solid fa-check"></i>
       <span class="wd-tooltip-label">نمایش لیست علاقه مندی</span>
     </a>`
    })
});
const owlDrag2 =document.querySelectorAll(".owl-drag-2");
function remove(x) {
    x.forEach(owld => {
        owld.classList.remove("active");
    });
    return;
}

const winWidth = window.innerWidth;
console.log(winWidth);
let MyQuery = window.matchMedia("(max-width: 576px)").matches;
let MyQueryM = window.matchMedia("(max-width: 767px)").matches;
let MyQueryl = window.matchMedia("(max-width: 1024px)").matches;
let oiWid= parseInt(window.getComputedStyle(owlItem2[0]).getPropertyValue("width"));
let oiWid1= parseInt(window.getComputedStyle(owlItem1[0]).getPropertyValue("width"));
window.addEventListener("resize",()=>{
    location.reload();
})
owlDrag2.forEach(od2 => {
    od2.addEventListener("click",()=>{
        remove(owlDrag2),
        od2.classList.add("active");
       for (let index = 0; index < owlDrag2.length; index++) {
        const element = owlDrag2[index];
        if (od2 === element) {
            if (MyQuery==true) {
                owlStag2.style.marginRight= -((oiWid+10.2)*index)-14+"px";
            }else{
                if (index<=2) {
                    owlStag2.style.marginRight= -(((oiWid+11)*3)*index)-15+"px"; 
                } else {
                    owlStag2.style.marginRight= -(((oiWid+11)*3)*index)+((oiWid+11)*2)-14+"px";
                }
            }
        }
       } 
    })
});

let i =0;
if (MyQuery==true) {
    owlnav7[1].addEventListener("click",()=>{
        if (i<owlDrag2.length-1) {
            i++;
            owlStag2.style.marginRight= -((oiWid+10.2)*i)-14+"px";
            remove(owlDrag2);
            owlDrag2[i].classList.add("active");
        } else {
            i= 0;
            owlStag2.style.marginRight= -((oiWid+10.2)*i)-14+"px";
            remove(owlDrag2);
            owlDrag2[i].classList.add("active");
        }
    })
    owlnav7[0].addEventListener("click",()=>{
        if (i>=1) {
            i--;
            owlStag2.style.marginRight= -((oiWid+10.2)*i)-14+"px";
            remove(owlDrag2);
            owlDrag2[i].classList.add("active");
        } else {
            i= owlDrag2.length-1;
            owlStag2.style.marginRight= -((oiWid+10.2)*i)-14+"px";
            remove(owlDrag2);
            owlDrag2[i].classList.add("active");
        }
    })
}else if (MyQueryM==true) {
    owlnav7[1].addEventListener("click",()=>{
        if (i<3) {
            i++;
            owlStag2.style.marginRight= -(((oiWid+11)*3)*i)+((oiWid+11)*2)-14+"px";
            remove(owlDrag2);
            owlDrag2[i].classList.add("active");
        } else {
            i= 0;
            owlStag2.style.marginRight= -(((oiWid+11)*3)*i)-14+"px";
            remove(owlDrag2);
            owlDrag2[i].classList.add("active");
        }
    })
    
    owlnav7[0].addEventListener("click",()=>{
        if (i>=1) {
             i--;
            owlStag2.style.marginRight= -(((oiWid+11)*3)*i)-14+"px";
            remove(owlDrag2);
            owlDrag2[i].classList.add("active");
        } else {
            i= 3;
            owlStag2.style.marginRight= -(((oiWid+11)*3)*i)+((oiWid+11)*2)-14+"px";
            remove(owlDrag2);
            owlDrag2[i].classList.add("active");
        }
    })

}else{
    owlnav7[1].addEventListener("click",()=>{
        if (i<2) {
            i++;
            owlStag2.style.marginRight= -(((oiWid+11)*3)*i)+((oiWid+11)*2)-14+"px";
            remove(owlDrag2);
            owlDrag2[i].classList.add("active");
        } else {
            i= 0;
            owlStag2.style.marginRight= -(((oiWid+11)*3)*i)-14+"px";
            remove(owlDrag2);
            owlDrag2[i].classList.add("active");
        }
    })
    owlnav7[0].addEventListener("click",()=>{
        if (i>=1) {
            i--;
            owlStag2.style.marginRight= -(((oiWid+11)*3)*i)-14+"px";
            remove(owlDrag2);
            owlDrag2[i].classList.add("active");
        } else {
            i= 2;
            owlStag2.style.marginRight= -(((oiWid+11)*3)*i)+((oiWid+11)*2)-14+"px";
            remove(owlDrag2);
            owlDrag2[i].classList.add("active");
        }
    })
}
owlDrag1.forEach(od1 => {
    od1.addEventListener("click",()=>{
        remove(owlDrag1);
        od1.classList.add("active");
       for (let i = 0; i < owlDrag1.length; i++) {
        const element = owlDrag1[i];
        if (od1 === element) {
            if (MyQuery==true) {
                owlStag1.style.marginRight= -(((oiWid1+10.2)*1.5)*i)+"px";
             }else if (MyQueryM==true) {
                if (i<2) {
                    owlStag1.style.marginRight= -(((oiWid1+11)*3)*i)+"px"; 
                } else {
                    owlStag1.style.marginRight= -(((oiWid1+11)*3)*i)+((oiWid1+11)*2)+"px";
                }
             }else if(MyQueryl==true){
                owlStag1.style.marginRight= -(((oiWid1+11)*3)*i)+"px";
            }else{
                owlStag1.style.marginRight= -(((oiWid1+11)*2)*i)+"px";
            }
        }
       } 
    })
});

function moveArrow(num) {
    owlStag1.style.marginRight= -(((oiWid1+10.2)*num)*i)+"px";
    remove(owlDrag1);
    owlDrag1[i].classList.add("active");
}
function moveArrow2(num) {
    owlStag1.style.marginRight= -(((oiWid1+10.2)*num)*i)+((oiWid1+11)*(num-1))+"px";
    remove(owlDrag1);
    owlDrag1[i].classList.add("active");
}
owlnav5.forEach(on5=>{
    on5.addEventListener("click",()=>{
        if (MyQuery==true && on5==owlnav5[0]) {
            if (i>0) {
                i--;
            } else {
                i= owlDrag1.length-1;
            }
            moveArrow(1.5);
        } else if(MyQuery==true && on5==owlnav5[1]){
            if (i<owlDrag1.length-1) {
                i++;
            } else {
                i= 0;
            }
            moveArrow(1.5);
        }else if (MyQueryM==true && on5==owlnav5[0]) {
            if (i>0) {
                i--;
                moveArrow(3);
           } else {
               i= 2;
               moveArrow2(3);
           }
        }else if (MyQueryM==true && on5==owlnav5[1]) {
            if (i<2) {
                i++;
                moveArrow2(3);
            } else {
                i= 0;
                moveArrow(3);
            }
        }else if (MyQueryl==true) {
            if (i>0) {
                i--;
           } else {
               i= 1;
           }
           moveArrow(3);
        } else {
            if (i>0) {
                i--;
           } else {
               i= 1;
           }
           moveArrow(2);
        }
    })
})




           














// console.log(owlPrev);
// owlPrev.forEach(owlp => {
//     owlp.addEventListener("click",()=>{
//         console.log(owlp);
//         if (owlp=== owlPrev[1] ) {
//             if ( owlStag1.classList.contains("disable")) {
//                 owlDrag1.forEach(element => {
//                     element.classList.toggle("active");
//                 });
//                 owlStag1.classList.remove("disable");
//             } else {
//                 owlDrag1.forEach(element => {
//                     element.classList.toggle("active");
//                 });
//                 owlStag1.classList.add("disable") 
//             }    
//         }else if(owlp=== owlPrev[2]){
//             if ( owlStag2.classList.contains("disable")||owlStag2.classList.contains("disabled") ) {
//                 owlStag2.classList.remove("disable");
//                 owlStag2.classList.remove("disabled");
//                 owlDrag2[0].classList.add("active");
//                 owlDrag2[2].classList.remove("active");
//             } else {
//                 owlStag2.classList.add("disabled");
//                 owlDrag2[2].classList.add("active");
//                 owlDrag2[0].classList.remove("active");
//             }    
            
//         }else{
//             if ( owlStag0.classList.contains("disable")) {
//                 owlStag0.classList.remove("disable");
//             } else {
//                 owlStag0.classList.add("disable") 
//             }    
//         }
//     });
// })
// owlNext.forEach(owln => {
//     owln.addEventListener("click",()=>{
//         if (owln=== owlNext[1] ) {
//             if ( owlStag1.classList.contains("disable")) {
//                 owlDrag1.forEach(element => {
//                     element.classList.toggle("active");
//                 });
//                 owlStag1.classList.remove("disable");
//             } else {
//                 owlDrag1.forEach(element => {
//                     element.classList.toggle("active");
//                 });
//                 owlStag1.classList.add("disable") 
//             }    
//         }else{
//             if ( owlStag2.classList.contains("disable")||owlStag2.classList.contains("disabled") ) {
//                 owlStag2.classList.remove("disable");
//                 owlStag2.classList.remove("disabled");
//                 owlDrag2[0].classList.add("active");
//                 owlDrag2[2].classList.remove("active");
//             } else {
//                 owlStag2.classList.add("disabled");
//                 owlDrag2[2].classList.add("active");
//                 owlDrag2[0].classList.remove("active");
//             }    
            
//         }
//     });
// });

// console.log(owlDrag1);
// owlDrag1.forEach(owld1 => {
//     owld1.addEventListener("click",(e)=>{
//         remove1();
//         owld1.classList.add("active");
//         if (owlDrag1[1].classList.contains("active")) {
//             owlStag1.classList.add("disable");  
//         }else{
//             owlStag1.classList.remove("disable");
//         }
//     })
// });
// owlDrag2.forEach(owld2 => {
//     owld2.addEventListener("click",(e)=>{
//         remove2();
//         owld2.classList.add("active");
//         if (owlDrag2[1].classList.contains("active")) {
//             owlStag2.classList.remove("disabled");
//             owlStag2.classList.add("disable");  
//         }else if (owlDrag2[2].classList.contains("active")) {
//             owlStag2.classList.remove("disable");
//             owlStag2.classList.add("disabled");
//         }else{
//             owlStag2.classList.remove("disabled");
//             owlStag2.classList.remove("disable");
//         }
//     })
// });



     
