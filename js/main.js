window.onscroll=function(){
    var contain_head=document.querySelector('.contain_barra');
    var media=window.matchMedia("(min-width: 768px)").matches;
    media? contain_head.classList.toggle('cambiar-contain-barra',window.scrollY > 935):
    contain_head.classList.toggle('cambiar-contain-barra',window.scrollY > 600)
}

document.addEventListener('DOMContentLoaded', function () {
    var media=window.matchMedia("(min-width: 768px)").matches;
    const list = document.querySelector('.contents');
    const menu = document.querySelector('.menu');
    if(!media){
    menu.addEventListener('click', () => {
    list.classList.toggle('viw-tabla');
    });
}
});

