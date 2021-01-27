const btns = document.querySelectorAll(".tab-btn");
const product = document.querySelectorAll(".product");
const articles = document.querySelectorAll(".content");
const headphones = document.getElementById("headphones")
const earphones = document.getElementById("earphones")
const buy = document.querySelectorAll(".buy-btn");
const buy_span = document.querySelectorAll(".notAvailabe")
const otherProduct = document.getElementById("otherProduct-btn")
const products = Array.from(product);
const modalBtn = document.querySelectorAll(".modal-btn");
const modal = document.querySelector(".modal-overlay");
const closeBtn = document.querySelectorAll(".close-btn");
const meseci = [
    "Januar",
    "Februar",
    "Mart",
    "April",
    "Maj",
    "Jun",
    "Jul",
    "Avgust",
    "Septembar",
    "Oktobar",
    "Novembar",
    "Decmbar"
]
const daniUNedelji = [
    "Nedelja",
    "Ponedeljak",
    "Utorak",
    "Sreda",
    "Cetvrtak",
    "Petak",
    "Subota"
]
const restock = document.querySelector(".restock");
const dealine = document.querySelector(".deadline");
const items = document.querySelectorAll(".deadline-format h4")
const earphonesBtn = document.querySelector(".earphones-btn")
// const proizvodi =[
//     {
//         name:"hefons",
//         specifications:"sfdasfdasfa",

//     }
// ]


products.forEach(item =>{
    item.addEventListener("click", function (e){
        const id= e.target.dataset.id;
        if(id){
            btns.forEach(function(btn){
                btn.classList.remove("active");
                e.target.classList.add("active");
            });
            articles.forEach(function(article){
                article.classList.remove("active");
            })
            const element = document.getElementById(id);
            element.classList.add("active");
        }
    })
})

buy.forEach(item => {
    item.addEventListener("click", function (){
        buy_span.forEach(span => {
            span.innerHTML="Ovaj proizvod trenutno nije na raspolaganju."
        })
    })
})

otherProduct.addEventListener("click",function (){
    if(headphones.classList == "section")
    {
        headphones.classList.add("section-hidden")
        earphones.classList.remove("section-hidden")
        otherProduct.innerHTML="zVuk Hedfons"
    }
    else{
        earphones.classList.add("section-hidden")
        headphones.classList.remove("section-hidden")
        otherProduct.innerHTML="zVuk Irfons"
    }
})

modalBtn.forEach(item=>{
    item.addEventListener("click",function(){
        modal.classList.add("open-modal");
    })
})
closeBtn.forEach(item=>{
    item.addEventListener("click",function(){
        modal.classList.remove("open-modal");
    })
})

//countdown
let futureDate = new Date(2021,6,26,11,30,0);
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const mins = futureDate.getMinutes();
let month = futureDate.getMonth();
month = meseci[month];
const date = futureDate.getDate();
const weekday = daniUNedelji[futureDate.getDay()];
const secs = futureDate.getSeconds();

restock.textContent= `Ovaj proizvod trenutno nije dostupan.\n
Sledeći restock je u ${weekday} ${date}. ${month}a ${year}. u ${hours}:${mins}h`;

const futureTime = futureDate.getTime();
function getRemainingTime (){
    const today = new Date().getTime();
    const t = futureTime - today;
    const oneDay = 24*60*60*1000;
    const oneHour = 60*60*1000;
    const oneMinute = 60*1000;
    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour)/ oneMinute);
    let seconds = Math.floor((t % oneMinute)/ 1000);

    const values = [days,hours,minutes,seconds];

    function format(item){
        if(item<10){
            return item = `0${item}`
        }
        return item;
    }

    items.forEach(function(item,index){
        item.innerHTML = format(values[index]);
    });

    if(t<0){
        clearInterval(countdown);
        deadline.innerHTML = `<h4>dodato u korpu!</h4>`
    }
}

let countdown = setInterval(getRemainingTime,1000);

(()=>{
    const product = document.location.search.replace(/^.product?\=/,'')
    const p = document.getElementById(product);
    if(p)
        p.classList.remove('section-hidden');
    else{
    const def=document.getElementById('headphones');
    def.classList.remove('section-hidden');
    }
})()

getRemainingTime();
