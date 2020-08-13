function alerta() {
    var aviso = window.confirm('O site a seguir está em desenvolvimento,'
                        +' portanto pode apresentar instabilidades/erros.'
                        +'\nTem certeza que pretende prosseguir?');
    if (aviso == true) {
        return window.open('./versions/vt/index.html', '_self');
    } else {
        window.alert('Ficaremos nesta mesma página')
    }
}