
var slika = document.querySelector("#main_img");
console.log(slika.src)
var slike =['img/pic1.svg','img/pic5.svg', 'img/pic6.svg',  'img/pic7.svg',  'img/pic8.svg']
var i=0;
function slider(){
    if(i<slike.length){
        slika.src=slike[i];
        i++;
        console.log(slika.src)
    }
    else{
        i=0;
    }
    setTimeout('slider()',5000)
}
window.onload= slider();