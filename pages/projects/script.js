function openMenu() {
    //$("#nav").css("right:", 0 + "px");
    event.preventDefault();
    $('.nav').css({ 'right':'0px'});
}

function closeMenu() {
    //$("#nav").css("right:", 0 + "px");
    event.preventDefault();
    $('.nav').css({ 'right':'-100%'});
}

function alertcalculator() {
    var aviso = window.confirm('Como informado, o site a seguir está em desenvolvimento,'
                        +' portanto pode apresentar instabilidades/erros.'
                        +'\nTem certeza que pretende prosseguir?');
    if (aviso == true) {
        return window.open('./apps/calculadora/index.html', '_self');
    } else {
        window.alert('Ficaremos nesta mesma página')
    }
}