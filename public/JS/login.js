const name = $('#nameLogin');
const password = $('#passwordLogin');
const labelUser = $('label[for="nameLogin"]');
const labelPass = $('label[for="passwordLogin"]');
const erroMsg = $('.erro');

function verificarVal(element, label){
    element.focus(function(){
        $(label).css('top', '-10px').css('font-size', '16px');
    }).blur(function(){
        if(element.val() === ''){
            $(label).css('top', '15px').css('font-size', '18px');
        }else{
            $(label).css('top', '-10px').css('font-size', '16px');
        }
    });
}

verificarVal(name, labelUser);
verificarVal(password, labelPass);

function verificarCampos(){
    if(name.val() !== ""){
        erroMsg.eq(0).removeClass('show');
    }

    if(password.val() !== ""){
        erroMsg.eq(1).removeClass('show');
    }
}

name.keyup(function(){
    verificarCampos();
});

name.keydown(function(){
    verificarCampos();
});

password.keyup(function(){
    verificarCampos();
});

password.keydown(function(){
    verificarCampos();
});

const span = $('.span_dentro_do_p');

span.click(()=>{
    alert('Isso é só pra ficar bonitinho kkkkkk');
});

$('input[type="submit"]').click(function(e){
    const nameVal = name.val();
    const passwordVal = password.val();

    if(!nameVal){
        erroMsg.eq(0).text('Preencha este campo.');
        erroMsg.eq(0).addClass('show');
        e.preventDefault();
    }

    if(!passwordVal){
        erroMsg.eq(1).text('Preencha este campo.');
        erroMsg.eq(1).addClass('show');
        e.preventDefault();
    }

    const user = {
        name: "felipe_e2458",
        password: "124578963__124578963"
    }

    if(nameVal === user.name && passwordVal === user.password){
        window.location.href = "https://felipe2458.github.io/escola/routes/page.html";
    }else{
        alert('Usuário ou senha inválidos.');
    }

    //finalizado!!
});