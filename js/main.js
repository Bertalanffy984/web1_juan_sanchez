window.onscroll=function(){
    var contain_head=document.querySelector('.contain_barra');
    var media=window.matchMedia("(min-width: 768px)").matches;
    media? contain_head.classList.toggle('cambiar-contain-barra',window.scrollY > 935):
    contain_head.classList.toggle('cambiar-contain-barra',window.scrollY > 600)
}


// (function () {
//     const list = document.querySelector('.contents');
//     const menu = document.querySelector('.menu');
//     menu.addEventListener('click', () => {
//     list.classList.toggle('viw-tabla');
//     });

// })();
document.addEventListener('DOMContentLoaded', function () {
    var media=window.matchMedia("(min-width: 768px)").matches;
    if(!media){
    const list = document.querySelector('.contents');
    const menu = document.querySelector('.menu');
    menu.addEventListener('click', () => {
    list.classList.toggle('viw-tabla');
    });
}
});

