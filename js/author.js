
const infos = document.querySelectorAll(".info");
infos.forEach(function(info){
    const btn = info.querySelector(".info-btn")
    btn.addEventListener("click",function (){
        infos.forEach(function(item){
            if(item !== info){
                item.classList.remove("show-text");
            }
        })
        info.classList.toggle("show-text");
    });
});