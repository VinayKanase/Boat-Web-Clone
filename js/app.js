$(document).ready(function() {
  $('#autoWidth').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth').removeClass('cS-hidden');
      } 
  });  
});
$(document).ready(function() {
  $('#autoWidth2').lightSlider({
      autoWidth:true,
      loop:true,
      onSliderLoad: function() {
          $('#autoWidth2').removeClass('cS-hidden');
      } 
  });  
});
$(document).ready(function() {
  $('#autoWidth3').lightSlider({
      item:3,
      loop:false,
      slideMove:1,
      easing: 'cubic-bezier(0.25, 0, 0.25, 1)',
      speed:600,
      responsive : [
          {
              breakpoint:800,
              settings: {
                  item:2,
                  slideMove:1,
                  slideMargin:6,
                }
          },
          {
              breakpoint:550,
              settings: {
                  item:1,
                  slideMove:1
                }
          }
      ]
  });  
});
//Selectors
const hamburgur = document.querySelector(".hamburgur") || document.querySelector("line");
const navcontainer = document.querySelector(".nav-cont");
const shopcontainer  = document.querySelector(".shop-cont");
const options = document.querySelector(".options");
const morecontainer = document.querySelector(".more-cont");
const optionsdrop =document.querySelector(".options-drop");
const  optioncontaner = document.querySelector(".optn");
const  optiondropcontaner = document.querySelector(".optn-drop");
const ul = document.querySelector(".ul");
//Event Listners
window.addEventListener("resize",()=>{
  // console.log()
  // location.reload();
});
hamburgur.addEventListener("click",()=>{
 const line1 = document.querySelector(".line1");
 const line2 = document.querySelector(".line2");
 const line3 = document.querySelector(".line3");
  line1.classList.toggle("toggle");
  line2.classList.toggle("toggle");
  line3.classList.toggle("toggle");
  navcontainer.classList.toggle("innav");
});

function hovercategories() {
  let shophov = false, conthove = 0;
  let morehov = false, cont = 0;
  let hovereffect;
  if (window.innerWidth >= 720) {
    hovereffect = setInterval(() => {
      shopcontainer.addEventListener("mouseover" || "click", () => {
        shophov = true;
      });
      shopcontainer.addEventListener("mouseout" || "click", () => {
        shophov = false;
      });
      options.addEventListener("mouseover", () => {
        conthove = 1;
      });
      options.addEventListener("mouseout", () => {
        conthove = 2;
      });
      if (shophov) {
        options.style.display = "flex";
      }
      if (!shophov && conthove == 1) {
        options.style.display = "flex";
      }
      if (!shophov && conthove == 2) {
        options.style.display = "none";
      }
      setTimeout(() => {
        if (!shophov && conthove == 0) {
          options.style.display = "none";
        }
      }, 1500);
      morecontainer.addEventListener("mouseover" || "click", () => {
        morehov = true;
      });
      morecontainer.addEventListener("mouseout" || "click", () => {
        morehov = false;
      });
      optionsdrop.addEventListener("mouseover", () => {
        cont = 1;
      });
      optionsdrop.addEventListener("mouseout", () => {
        cont = 2;
      });
      if (morehov) {
        optionsdrop.style.display = "flex";
      }
      if (!morehov && cont == 1) {
        optionsdrop.style.display = "flex";
      }
      if (!morehov && cont == 2) {
        optionsdrop.style.display = "none";
      }
      setTimeout(() => {
        if (!morehov && cont == 0) {
          optionsdrop.style.display = "none";
        }
      }, 1500);
      // console.log();
    }, 100);
  }
  else if(window.innerWidth<720){
    clearInterval(hovereffect);
    // optionsdrop.style.display = "none";
    shopcontainer.addEventListener("click",()=>{
      optioncontaner.classList.toggle("show");
      ul.classList.toggle("uloverflowA");
      shopcontainer.childNodes[1].classList.toggle("transrotate");
    //  console.log();
    });
    morecontainer.addEventListener("click",()=>{
      optiondropcontaner.classList.toggle("show-drop");
      ul.classList.toggle("uloverflowB");
      morecontainer.childNodes[1].classList.toggle("transrotate");
    });
  }
}
setInterval(() => {
 hovercategories();
 if(window.innerWidth<720)
   options.style.display= "none";
}, 100);
let onetime=false;
window.addEventListener("scroll",function(){
  // console.log(scrollX,scrollY);
  const heading = document.querySelector(".section1 .playcont .heading");
  const activeautoslider = document.querySelector(".startscroll");
  // console.log();
  const shopslider = document.querySelector(".section1 .playcont .shopslider");
  const imagein = document.querySelector(".section2 .information-stars .star-img img");
  const description = document.querySelector(".section2 .information-stars .all-description");
  const sliderpro = document.querySelector(".slider-product");
  const txtdesc = document.querySelector(".text-description");
  const imgtab = document.querySelector(".img-tab");
  if(scrollY>=400){
    heading.style.animation = "scrollheadin 0.5s cubic-bezier(0.52, 1.39, 0, 1.19) forwards";
  }
    if(window.innerWidth<932)
    shopslider.style.animation = "scrollresponsive 0.5s cubic-bezier(0.34, 1.35, 0.33, 0.99) forwards";
    else
    shopslider.style.animation = "scrollshopslider 0.5s cubic-bezier(0.34, 1.35, 0.33, 0.99) forwards";
    if(scrollY>=1000 && !onetime){
      activeautoslider.classList.add("active");
      imagein.style.animation = "leftaniin 0.8s cubic-bezier(0.84, -0.04, 0.58, 1) forwards";
      description.style.animation = "leftaniin 0.8s cubic-bezier(0.84, -0.04, 0.58, 1) forwards";
      onetime=true;
      // leftaniin 0.8s cubic-bezier(0.84, -0.04, 0.58, 1) forwards
      setTimeout(() => {
        imagein.style.animation="none";
    description.style.animation="none";
      }, 1300);
    }
    
if(scrollY>1466){
  sliderpro.style.animation="leftaniin 0.8s cubic-bezier(0.1, 1.11, 0.61, 0.85) forwards";
  // if(scrollY>3075)
  // hamburgur.style.display = "none";
}
if(scrollY>2750){
  imgtab.style.animation="imgani 0.8s cubic-bezier(0.34, 0.99, 0.51, 1.19)";
  txtdesc.style.animation = "leftin 0.8s ease forwards";
}
});

const shop = document.querySelector(".shop");
const help = document.querySelector(".help");
const company = document.querySelector(".company");
const footer = document.querySelector("footer");
let a1=false,a2=false,a3=false;
shop.addEventListener("click",()=>{
  // console.log();
  if(shop.children[0].children[0].classList.contains("fa-plus")){
    shop.children[0].children[0].classList.remove("fa-plus");
    shop.children[0].children[0].classList.add("fa-minus");
    a1=true;
  }
  else{
    shop.children[0].children[0].classList.remove("fa-minus");
    shop.children[0].children[0].classList.add("fa-plus");
    a1=false;
  }
  shop.children[1].classList.toggle("display");
});
help.addEventListener("click",()=>{
  help.children[1].classList.toggle("display");
  if(help.children[0].children[0].classList.contains("fa-plus")){
    help.children[0].children[0].classList.remove("fa-plus");
    help.children[0].children[0].classList.add("fa-minus");
    a2=true;
  }
  else{
    help.children[0].children[0].classList.remove("fa-minus");
    help.children[0].children[0].classList.add("fa-plus");
    a2=false;
  }
});
company.addEventListener("click",()=>{
  company.children[1].classList.toggle("display");
  if(company.children[0].children[0].classList.contains("fa-plus")){
    company.children[0].children[0].classList.remove("fa-plus");
    company.children[0].children[0].classList.add("fa-minus");
    a3=true;
  }
  else{
    company.children[0].children[0].classList.remove("fa-minus");
    company.children[0].children[0].classList.add("fa-plus");
    a3=false;
  }
});
setTimeout(() => {
  if(a1==true && a2==false && a3==false){
    footer.style.height = "1140px";
  }
}, 100);