let title = document.getElementsByTagName(".h1").innertext;

const p3 = document.getElementsByTagName(".p3").innertext;
function Warna(){
    p3.style.backgroundColor = 'lighblue';

    const p3 = document.querySelector(".p3");
    // p3.onclick = function(){
    //     p3.style.backgroundColor = 'lighblue';
    // }
    // p3.onclick = function(){
    //     p3.style.color = 'red';
    // }
    p3.addEventListener('mouseenter', function() {
            p3.style.backgroundColor = 'lighblue';
        }
    );
    p3.addEventListener('mouseleave', function() {
        p3.style.color = 'red';
    }
    );

}


let title = document.getElementsByTagName("h1").innertext;
title = document.getElementById("a").innertext = "curiculum";
console.log(title);

function profilCV(){
    document.getElementsByTagName("h1").innertext;
    document.querySelector(".a").style.fontFamily = "Times New Roman";
 }

