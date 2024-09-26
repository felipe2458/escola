$(function(){
    const ss = $('.res#sim');
    const nn = $('.res#nao');

    $(ss).click(()=>{
        alert('Aguardamos o nosso F-O POSITIVO :)');
        window.location.href = "https://felipe2458.github.io/escola/";
    });

    $(nn).hover(function(){
        let numberY = Math.floor(Math.random() * 250);
        let numberX = Math.floor(Math.random() * 350);
        $(this).css('top', `${numberX}px`);
        $(this).css('left', `${numberY}px`);
    });
});